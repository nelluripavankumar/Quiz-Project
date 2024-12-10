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
import StartPage from './pages/StartPage';

// Import the new Aptitude set components
import AptitudeSet1 from './pages/sets/AptitudeSet1';
import AptitudeSet2 from './pages/sets/AptitudeSet2';
import AptitudeSet3 from './pages/sets/AptitudeSet3';
import AptitudeSet4 from './pages/sets/AptitudeSet4';
import AptitudeSet5 from './pages/sets/AptitudeSet5';
import AptitudeSet6 from './pages/sets/AptitudeSet6';
// Import the new Reasoning set components
import ReasoningSet1 from './pages/sets/ReasoningSet1';
import ReasoningSet2 from './pages/sets/ReasoningSet2';
import ReasoningSet3 from './pages/sets/ReasoningSet3';
import ReasoningSet4 from './pages/sets/ReasoningSet4';
import ReasoningSet5 from './pages/sets/ReasoningSet5';
import ReasoningSet6 from './pages/sets/ReasoningSet6';
// Import the ScoreCard component
import ScoreCard from './pages/sets/ScoreCard';

import './App.css';

const App = () => {
  const [theme, setTheme] = useState('dark');

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

        {/* Header */}
        <Header />

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
            <Route path="/aptitude-set-1" element={<AptitudeSet1 />} />
            <Route path="/aptitude-set-2" element={<AptitudeSet2 />} />
            <Route path="/aptitude-set-3" element={<AptitudeSet3 />} />
            <Route path="/aptitude-set-4" element={<AptitudeSet4 />} />
            <Route path="/aptitude-set-5" element={<AptitudeSet5 />} />
            <Route path="/aptitude-set-6" element={<AptitudeSet6 />} />
            <Route path="/reasoning-set-1" element={<ReasoningSet1 />} />
            <Route path="/reasoning-set-2" element={<ReasoningSet2 />} />
            <Route path="/reasoning-set-3" element={<ReasoningSet3 />} />
            <Route path="/reasoning-set-4" element={<ReasoningSet4 />} />
            <Route path="/reasoning-set-5" element={<ReasoningSet5 />} />
            <Route path="/reasoning-set-6" element={<ReasoningSet6 />} />
            <Route path="/scorecard" element={<ScoreCard />} />
            <Route path="/start-page" element={<StartPage />} />
          </Routes>
        </main>
      </animated.div>
    </Router>
  );
};

export default App;
