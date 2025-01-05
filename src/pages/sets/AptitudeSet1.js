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
    {
      question: "If all roses are flowers, and some flowers fade quickly, which of the following is true?",
      options: ["Some roses fade quickly", "No roses fade quickly", "All roses fade quickly", "None of the above"],
      correctAnswer: "Some roses fade quickly",
    },
    {
      question: "John is taller than Tom. Tom is taller than Harry. Who is the tallest?",
      options: ["John", "Tom", "Harry", "Not enough information"],
      correctAnswer: "John",
    },
    {
      question: "If you rearrange the letters of 'LISTEN', you can form which of the following words?",
      options: ["SILENT", "SENTIL", "TENSIL", "LENTIS"],
      correctAnswer: "SILENT",
    },
    {
      question: "Which number comes next in the series: 2, 5, 8, 11, ?",
      options: ["12", "14", "15", "13"],
      correctAnswer: "14",
    },
    {
      question: "If all roses are flowers and all flowers are plants, which of the following statements is true?",
      options: ["Some plants are roses", "All plants are roses", "Some roses are plants", "All flowers are roses"],
      correctAnswer: "Some plants are roses",
    },
    {
      question: "Which of the following is the odd one out?",
      options: ["2", "4", "8", "16", "24"],
      correctAnswer: "24",
    },
    {
      question: "If 'A' means +, 'B' means -, and 'C' means ÷, what is the result of 10 A 5 B 2 C 2?",
      options: ["12", "9", "10", "11"],
      correctAnswer: "9",
    },
    {
      question: "What comes next in the series: AB, CD, EF, GH, ?",
      options: ["HI", "IJ", "KL", "LM"],
      correctAnswer: "IJ",
    },
    {
      question: "Which of the following is the opposite of 'NEVER'?",
      options: ["Always", "Sometimes", "Rarely", "Occasionally"],
      correctAnswer: "Always",
    },
    {
      question: "Which of the following figures is different from the rest?",
      options: ["Square", "Rectangle", "Circle", "Triangle"],
      correctAnswer: "Circle",
    },
    {
      question: "In a family of 6 members P, Q, R, S, T, and U, P is the father of Q, R is the brother of Q, S is the wife of P, T is the son of R, and U is the mother of T. How is R related to S?",
      options: ["Son", "Brother-in-law", "Father", "Nephew"],
      correctAnswer: "Brother-in-law",
    },
    {
      question: "Which of the following words is the opposite of 'FLIGHT'?",
      options: ["Flighty", "Grounded", "Soared", "Rise"],
      correctAnswer: "Grounded",
    },
    {
      question: "Which number should come next in the series: 7, 14, 21, 28, ?",
      options: ["30", "35", "36", "40"],
      correctAnswer: "35",
    },
    {
      question: "Which of the following words is the odd one out?",
      options: ["Apple", "Banana", "Orange", "Carrot"],
      correctAnswer: "Carrot",
    },
    {
      question: "If all cats are mammals and some mammals are black, which of the following is true?",
      options: ["Some cats are black", "All cats are black", "No cats are black", "None of the above"],
      correctAnswer: "Some cats are black",
    },
    {
      question: "Which figure completes the pattern?",
      options: ["Option 1", "Option 2", "Option 3", "Option 4"],
      correctAnswer: "Option 2",
    },
    {
      question: "Which letter is the odd one out?",
      options: ["A", "B", "C", "D"],
      correctAnswer: "D",
    },
    {
      question: "Which number comes next in the series: 1, 4, 9, 16, ?",
      options: ["18", "20", "25", "30"],
      correctAnswer: "25",
    },
    {
      question: "If it is raining, then the ground is wet. The ground is wet. What can we conclude?",
      options: ["It is raining", "It is not raining", "The ground is not wet", "Not enough information"],
      correctAnswer: "Not enough information",
    },
    {
      question: "What comes next in the sequence: 1, 1, 2, 3, 5, 8, ?",
      options: ["10", "12", "13", "13"],
      correctAnswer: "13",
    },
    {
      question: "Which number comes next in the sequence: 1, 1, 2, 6, 24, ?",
      options: ["120", "96", "48", "30"],
      correctAnswer: "120",
    },
    {
      question: "Which of the following is a synonym of 'BLISSFUL'?",
      options: ["Happy", "Angry", "Sad", "Confused"],
      correctAnswer: "Happy",
    },
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
