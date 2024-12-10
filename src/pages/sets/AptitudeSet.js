import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // To access state passed from the previous page
import './AptitudeSet.css'; // CSS file for styling

const AptitudeSet = () => {
  const location = useLocation(); // Access the location object
  const setNumber = location.pathname.split('-')[2]; // Extract the set number from the URL

  const [timer, setTimer] = useState(30 * 60); // 30 minutes in seconds
  const [questionIndex] = useState(0);

  // You can update the questions based on setNumber if needed
  const questions = [
    {
      question: "What is 2 + 2?",
      options: ["3", "4", "5", "6"],
      correctAnswer: "4",
    },
    // Add more questions...
  ];

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer(prevTimer => prevTimer - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  return (
    <div className="aptitude-set-container">
      <div className="header">
        <h1>Aptitude Set {setNumber}</h1>
        <div className="timer">
          <div className="timer-text">Time Remaining</div>
          <div className="timer-value">{formatTime(timer)}</div>
        </div>
      </div>
      
      <div className="quiz-container">
        <h2>Question {questionIndex + 1}</h2>
        <p>{questions[questionIndex]?.question}</p>
        <form>
          {questions[questionIndex]?.options.map((option, index) => (
            <div key={index} className="option">
              <input
                type="radio"
                id={`option-${index}`}
                name="answer"
                value={option}
              />
              <label htmlFor={`option-${index}`}>{option}</label>
            </div>
          ))}
        </form>

        <button className="next-btn">Next</button>
      </div>
    </div>
  );
};

export default AptitudeSet;
