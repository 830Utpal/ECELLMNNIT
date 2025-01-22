import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/grid" element={<SecondPage />} />
      </Routes>
    </Router>
  );
};

export default App;
