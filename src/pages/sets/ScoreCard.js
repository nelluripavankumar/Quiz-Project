import React from 'react';
import './ScoreCard.css';
import { useLocation, useNavigate } from 'react-router-dom';

const ScoreCard = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const score = location.state?.score || 0;
  const totalQuestions = 20;
  const correctPercentage = Math.round((score / totalQuestions) * 100);

  // Determine emoji based on score
  const getEmoji = () => {
    if (score > 15) return '😊'; // Happy face for high scores
    if (score >= 5) return '😐'; // Neutral face for average scores
    return '😢'; // Sad face for low scores
  };

  const getMessage = () => {
    if (score > 15) return 'Excellent performance!';
    if (score >= 5) return 'Good effort, keep practicing!';
    return 'Don’t give up, try again!';
  };

  return (
    <div className="scorecard-container">
      <div className="stars-background"></div>
      <h1 className="score-title">Your Score</h1>
      <div
        className="pie-chart-container"
        style={{ '--correct-percentage': correctPercentage }}
      >
        <div className="pie-chart"></div>
      </div>
      <div className="score-details">
        <p>{score} out of {totalQuestions} correct!</p>
        <p className="topic-info">Aptitude Set 2</p>
        <div className="performance-feedback">
          <span className="emoji">{getEmoji()}</span>
          <p className="feedback-message">{getMessage()}</p>
        </div>
      </div>
      <button className="home-button" onClick={() => navigate('/')}>
        Go to Home
      </button>
    </div>
  );
};

export default ScoreCard;
