import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom'; // For navigation and accessing state
import './StartPage.css'; // Correct capitalization
const StartPage = () => {
  const [timer, setTimer] = useState(10); // 30-second timer
  const [buttonEnabled, setButtonEnabled] = useState(false); // Start button disabled initially

  const navigate = useNavigate();
  const location = useLocation();

  // Extract setNumber from the URL or state
  const setNumber = location.state?.setNumber || 1;

  useEffect(() => {
    if (timer > 0) {
      const countdown = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);

      return () => clearInterval(countdown); // Cleanup interval
    } else {
      setButtonEnabled(true); // Enable the button when timer reaches 0
    }
  }, [timer]);

  const handleStartQuiz = () => {
    navigate(`/aptitude-set-${setNumber}`); // Navigate to the selected quiz set
  };

  return (
    <div className="start-page-container">
      <div className="instructions-box">
        <h1 className="instructions-title">Quiz Instructions</h1>
        <div className="instructions-content">
          <p><strong>Timing:</strong> You will have 10 minutes to complete the quiz.</p>
          <p><strong>Questions:</strong> Each question carries equal weightage.</p>
          <p><strong>Regulations:</strong></p>
          <ul>
            <li>Do not refresh the page during the quiz.</li>
            <li>Once the quiz starts, the timer cannot be paused.</li>
            <li>Ensure you have a stable internet connection.</li>
          </ul>
        </div>
        <div className="timer-box">
          <p className="timer-text">Please read the instructions carefully. The test will begin shortly.</p>
          <h2 className="timer-countdown">Time Remaining: {timer}s</h2>
        </div>
        <button
          className={`start-button ${buttonEnabled ? '' : 'disabled'}`}
          onClick={handleStartQuiz}
          disabled={!buttonEnabled} // Disable button until timer ends
        >
          Start Quiz
        </button>
      </div>
    </div>
  );
};

export default StartPage;
