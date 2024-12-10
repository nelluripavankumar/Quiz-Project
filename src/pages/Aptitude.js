import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import navigation hook
import './topics.css'; // Import the CSS file for styling
const Aptitude = () => {
  const navigate = useNavigate();

  // Navigate to the selected aptitude set page
  const handleSelectSet = (setNumber) => {
    navigate(`/aptitude-set-${setNumber}`); // Navigate dynamically based on set number
  };

  return (
    <div className="aptitude-container">
      <h1 className="title">Choose an Aptitude Set</h1>
      <div className="aptitude-options">
        {[1, 2, 3, 4, 5, 6].map((setNumber) => (
          <div
            key={setNumber}
            className="aptitude-option"
            onClick={() => handleSelectSet(setNumber)} // On click, navigate to the corresponding set
          >
            <div className="aptitude-option-box">
              <h2>Aptitude Set {setNumber}</h2>
              <p>Start Quiz</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Aptitude;
