import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './sets.css';

const Aptitude = () => {
  const [timer, setTimer] = useState(10 * 60); // 30 minutes in seconds
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answeredQuestions, setAnsweredQuestions] = useState(new Array(20).fill(false));
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  const [questionsAttempted, setQuestionsAttempted] = useState(new Array(20).fill(false));
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state

  const navigate = useNavigate();

  const questions = [
    // Add your 20 questions here, as shown above
  ];

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  const handleAnswerChange = (event) => {
    setSelectedAnswer(event.target.value);
  };

  const handleNextQuestion = () => {
    if (questionIndex < questions.length - 1) {
      if (selectedAnswer === questions[questionIndex].correctAnswer && !questionsAttempted[questionIndex]) {
        setCorrectAnswersCount((prevCount) => prevCount + 1);
        setAnsweredQuestions((prev) => {
          const updated = [...prev];
          updated[questionIndex] = true;
          return updated;
        });
      }
      setQuestionsAttempted((prev) => {
        const updated = [...prev];
        updated[questionIndex] = true;
        return updated;
      });
      setQuestionIndex(questionIndex + 1);
      setSelectedAnswer(null);
    }
  };

  const handlePreviousQuestion = () => {
    if (questionIndex > 0) {
      setQuestionIndex(questionIndex - 1);
      setSelectedAnswer(null);
    }
  };

  const handleModalSubmit = () => {
    navigate('/scorecard', { state: { score: correctAnswersCount } });
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  return (
    <div className="aptitude-app">
      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Submit Quiz</h2>
            <p>Are you sure you want to submit the quiz?</p>
            <div className="modal-buttons">
              <button className="submit-btn" onClick={handleModalSubmit}>
                Yes, Submit
              </button>
              <button className="cancel-btn" onClick={() => setIsModalOpen(false)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="header-container">
        <div className="title-container">
          <h1>Aptitude Set 1</h1>
        </div>
        <div className="timer-container">
          <div className="timer">
            <div className="timer-text">Time Remaining</div>
            <div className="timer-value">{formatTime(timer)}</div>
          </div>
          <button className="submit-btn" onClick={() => setIsModalOpen(true)}>
            Submit Quiz
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="content-container">
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

        {/* Question Tracker */}
        <div className="question-tracker">
          {answeredQuestions.map((answered, index) => (
            <div
              key={index}
              className={`question-box ${answered ? 'answered' : ''} ${
                questionsAttempted[index] ? (answered ? 'correct' : 'incorrect') : ''
              }`}
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
