import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';         // Import Home page
import Dashboard from './pages/Dashboard'; // Import Dashboard page

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />            {/* Home route */}
          <Route path="/dashboard" element={<Dashboard />} />    {/* Dashboard route */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
