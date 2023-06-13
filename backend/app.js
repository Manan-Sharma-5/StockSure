const express = require('express');
const app = express();

const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const request = require('request');

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
  password: String
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
      res.status(500).json({ error: 'Server error' });
    }
  });

app.get('/stock', (req, res) => {
    request.get({
        url: url,
        json: true,
        headers: {'User-Agent': 'request'}
      }, (err, res, data) => {
        if (err) {
          console.log('Error:', err);
        } else if (res.statusCode !== 200) {
          console.log('Status:', res.statusCode);
        } else {
          // data is successfully parsed as a JSON object:
          console.log(data);
        }
    });
});


  

app.listen(8000, () => console.log('Server started on port 8000'));
