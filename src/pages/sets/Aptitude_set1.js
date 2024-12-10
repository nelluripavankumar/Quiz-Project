import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // To navigate to the scorecard page
import './sets.css';

const Aptitude = () => {
  const [timer, setTimer] = useState(10 * 60); // 30 minutes in seconds
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answeredQuestions, setAnsweredQuestions] = useState(new Array(20).fill(false)); // 20 questions tracking
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0); // Track correct answers
  const [questionsAttempted, setQuestionsAttempted] = useState(new Array(20).fill(false)); // Track attempted questions

  const navigate = useNavigate();

  const questions = [
    {
      question: "What is 2 + 2?",
      options: ["3", "4", "5", "6"],
      correctAnswer: "4",
    },
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Rome"],
      correctAnswer: "Paris",
    },
    {
      question: "Who is the CEO of Tesla?",
      options: ["Jeff Bezos", "Elon Musk", "Bill Gates", "Mark Zuckerberg"],
      correctAnswer: "Elon Musk",
    },
    // Add more questions here to reach 20 questions
  ];

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer(prevTimer => prevTimer - 1);
      }, 1000);
      return () => clearInterval(interval); // Cleanup on unmount
    }
  }, [timer]);

  const handleAnswerChange = (event) => {
    setSelectedAnswer(event.target.value);
  };

  const handleNextQuestion = () => {
    if (questionIndex < questions.length - 1) {
      // Check if the answer is correct and update the answer status
      if (selectedAnswer === questions[questionIndex].correctAnswer && !questionsAttempted[questionIndex]) {
        setCorrectAnswersCount(prevCount => prevCount + 1);
        setAnsweredQuestions(prev => {
          const updated = [...prev];
          updated[questionIndex] = true; // Mark question as answered correctly
          return updated;
        });
      } else {
        setAnsweredQuestions(prev => {
          const updated = [...prev];
          updated[questionIndex] = false; // Mark question as answered (incorrect or skipped)
          return updated;
        });
      }

      setQuestionsAttempted(prev => {
        const updated = [...prev];
        updated[questionIndex] = true; // Mark question as attempted
        return updated;
      });
      setQuestionIndex(questionIndex + 1);
      setSelectedAnswer(null); // Reset selected answer for next question
    }
  };

  const handlePreviousQuestion = () => {
    if (questionIndex > 0) {
      setQuestionIndex(questionIndex - 1);
      setSelectedAnswer(null); // Reset selected answer for previous question
    }
  };

  const handleSubmit = () => {
    // Navigate to scorecard page and pass the score
    navigate('/scorecard', { state: { score: correctAnswersCount } });
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  return (
    <div className="aptitude-app">
      {/* Title and Timer in Same Row */}
      <div className="header-container">
        {/* Aptitude Set 1 Title Container */}
        <div className="title-container">
          <h1>Aptitude Set 1</h1>
        </div>

        {/* Timer and Submit Button in Timer Container */}
        <div className="timer-container">
          <div className="timer">
            <div className="timer-text">Time Remaining</div>
            <div className="timer-value">{formatTime(timer)}</div>
          </div>
          <button className="submit-btn" onClick={handleSubmit}>Submit Quiz</button>
        </div>
      </div>

      <div className="content-container">
        {/* Question Window */}
        <div className="question-window">
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
                  checked={selectedAnswer === option}
                  onChange={handleAnswerChange}
                />
                <label htmlFor={`option-${index}`}>{option}</label>
              </div>
            ))}
          </form>

          {/* Navigation Buttons */}
          <div className="buttons">
            <button
              className="prev-btn"
              onClick={handlePreviousQuestion}
              disabled={questionIndex === 0}
            >
              Previous Question
            </button>
            <button
              className="next-btn"
              onClick={handleNextQuestion}
              disabled={questionIndex === questions.length - 1}
            >
              Next Question
            </button>
          </div>
        </div>

        {/* Right Side Question Tracker */}
        <div className="question-tracker">
          {answeredQuestions.map((answered, index) => (
            <div
              key={index}
              className={`question-box ${answered ? 'answered' : ''} ${questionsAttempted[index] ? (answered ? 'correct' : 'incorrect') : ''}`}
            >
              {index + 1}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Aptitude;
