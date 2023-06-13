import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/Register';
import LandingPage from './Components/LandingPage';
import Learn from './Components/Learn';
import Dashboard from './Components/Dashboard';
import './App.css';
import React, { useState } from 'react';
import { Context } from 'react';

export const CredentialsContext = React.createContext();

function App() {

  const credentialState = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <CredentialsContext.Provider value={credentialState}>
    <Router>
      <Routes>
        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated}/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={isAuthenticated ? <Dashboard setIsAuthenticated={setIsAuthenticated}/> : <Login setIsAuthenticated={setIsAuthenticated}/>} />
      </Routes>
    </Router>
    </CredentialsContext.Provider>
  );
}

export default App;
