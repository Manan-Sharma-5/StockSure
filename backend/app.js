const express = require('express');
const app = express();

const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const url = 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=Y3ZA09ASPV1S85IA';

app.use(bodyParser.json());
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));

const URL = 'mongodb://127.0.0.1:27017/HackUnicorn';

mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log(err));

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  balance: Number,
  stocks: [{
    symbol: String,
    quantity: Number,
    price: Number
  }]
});

const User = mongoose.model('User', userSchema);

app.post('/register', async (req, res) => {
  const { username, password } = req.body;
  const user = new User({ username, password });
  const createdUser = await user.save();
  res.status(201).json(createdUser); // Sending the created user as the response
});

app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username, password });

    if (!user) {
      return res.status(404).json({ error: 'Invalid username or password' });
    }

    res.status(200).json({ message: 'Login successful', user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

app.post('/buy', async (req, res) => {
  try {
    // Retrieve necessary data from the request body
    const { username, symbol, quantity, price } = req.body;

    // Find the user based on the provided username
    const user = await User.findOne({ username });

    // Check if the user exists
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Calculate the total cost of buying the stocks
    const totalCost = price * quantity;

    // Check if the user has sufficient balance to make the purchase
    if (user.balance < totalCost) {
      return res.status(400).json({ error: 'Insufficient balance' });
    }

    // Update the user's balance and stocks
    user.balance -= totalCost;
    user.stocks.push({ symbol, quantity, price });

    // Save the updated user data
    await user.save();

    // Return the updated user data as the response
    res.status(200).json({ message: 'Stocks bought successfully', user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

app.post('/sell', async (req, res) => {
  try {
    // Retrieve necessary data from the request body
    const { username, symbol, quantity, price } = req.body;

    // Find the user based on the provided username
    const user = await User.findOne({ username });

    // Check if the user exists
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Find the stock to sell in the user's stocks array
    const stockIndex = user.stocks.findIndex((stock) => stock.symbol === symbol);

    // Check if the user owns the stock and has sufficient quantity to sell
    if (stockIndex === -1 || user.stocks[stockIndex].quantity < quantity) {
      return res.status(400).json({ error: 'Invalid stock or quantity' });
    }

    // Calculate the total amount to be received from selling the stocks
    const totalAmount = price * quantity;

    // Update the user's balance and stocks
    user.balance += totalAmount;
    user.stocks[stockIndex].quantity -= quantity;

    // If the quantity becomes zero, remove the stock from the array
    if (user.stocks[stockIndex].quantity === 0) {
      user.stocks.splice(stockIndex, 1);
    }

    // Save the updated user data
    await user.save();

    // Return the updated user data as the response
    res.status(200).json({ message: 'Stocks sold successfully', user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
  
});

app.listen(8000, () => console.log('Server started on port 8000'));
