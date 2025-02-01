import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar'; // Assuming Navbar is in the same folder
import Home from './navabar.utils/Home'; // Home component
import Menu from './navabar.utils/Menu'; // Menu component
import About from './navabar.utils/About'; // About component
import Contact from './navabar.utils/Contact'; // Contact component
import SignUp from './navabar.utils/SignUp'; // SignUp component
import LogIn from './navabar.utils/LogIn'; // Login component

const App = () => {
  return (
    <Router>
      <Navbar /> {/* Render the Navbar */}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>
    </Router>
  );
};

export default App;
