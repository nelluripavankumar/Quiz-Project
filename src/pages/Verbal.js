import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import navigation hook
import './topics.css'; // Use the same CSS file for all topics
const Verbal = () => {
  const navigate = useNavigate();

  // Navigate to the selected verbal set page
  const handleSelectSet = (setNumber) => {
    navigate(`/verbal-set-${setNumber}`); // Navigate dynamically based on set number
  };

  return (
    <div className="aptitude-container">
      <h1 className="title">Choose a Verbal Set</h1>
      <div className="aptitude-options">
        {[1, 2, 3, 4, 5, 6].map((setNumber) => (
          <div
            key={setNumber}
            className="aptitude-option"
            onClick={() => handleSelectSet(setNumber)} // On click, navigate to the corresponding set
          >
            <div className="aptitude-option-box">
              <h2>Verbal Set {setNumber}</h2>
              <p>Start Quiz</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Verbal;
