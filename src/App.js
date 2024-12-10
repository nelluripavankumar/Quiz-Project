import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { animated, useSpring } from '@react-spring/web';
import Header from './components/Header';
import Topics from './components/Topics';
import Aptitude from './pages/Aptitude';
import Verbal from './pages/Verbal';
import Reasoning from './pages/Reasoning';
import OperatingSystem from './pages/OperatingSystem';
import Coding from './pages/Coding';
import Infosys from './company/Infosys';
import TCS from './company/TCS';
import Wipro from './company/Wipro';
import Microsoft from './company/Microsoft';
import Google from './company/Google';
import './App.css';

const App = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // Page entrance animation
  const fadeInAnimation = useSpring({
    from: { opacity: 0, transform: 'translateY(-20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { duration: 1000 },
  });

  return (
    <Router>
      <animated.div
        className={`app ${theme}`}
        style={fadeInAnimation} // Apply animation
      >
        {/* Background with stars and twinkling effects */}
        <div className="stars"></div>
        {/* <div className="twinkling"></div> */}

        {/* Header with theme toggle */}
        <Header toggleTheme={toggleTheme} />

        <main>
          <Routes>
            <Route path="/" element={<Topics />} />
            <Route path="/aptitude" element={<Aptitude />} />
            <Route path="/verbal" element={<Verbal />} />
            <Route path="/reasoning" element={<Reasoning />} />
            <Route path="/os" element={<OperatingSystem />} />
            <Route path="/coding" element={<Coding />} />
            <Route path="/infosys" element={<Infosys />} />
            <Route path="/tcs" element={<TCS />} />
            <Route path="/wipro" element={<Wipro />} />
            <Route path="/microsoft" element={<Microsoft />} />
            <Route path="/google" element={<Google />} />
          </Routes>
        </main>
      </animated.div>
    </Router>
  );
};

export default App;
