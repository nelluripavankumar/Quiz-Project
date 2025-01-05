import React from 'react';
import { useNavigate } from 'react-router-dom';
import './topics.css';

const Reasoning = () => {
  const navigate = useNavigate();

  const handleSelectSet = (setNumber) => {
    navigate('/start-page', { state: { setNumber } }); // Navigate to the Start Page with the set number
  };

  return (
    <div className="aptitude-container">
      <h1 className="title">Choose an Reasoning Set</h1>
      <div className="aptitude-options">
        {[1, 2, 3, 4, 5, 6].map((setNumber) => (
          <div
            key={setNumber}
            className="aptitude-option"
            onClick={() => handleSelectSet(setNumber)}
          >
            <div className="aptitude-option-box">
              <h2>Reasoning Set {setNumber}</h2>
              <p>Start Quiz</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reasoning;
