import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import Details from './components/details.jsx';
import Dashboard from './components/dashboard.jsx';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Goto from './components/goto.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/app" element={<App />} />
        <Route path="/details" element={<Details />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<Goto/>} />
      </Routes>
    </Router>
  </React.StrictMode>
);
