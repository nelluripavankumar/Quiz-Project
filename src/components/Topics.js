import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import navigation hook
import './Topics.css';

const Topics = () => {
  const navigate = useNavigate(); // Initialize navigation hook

  return (
    <section className="topics-section">
      <h2>Topics</h2>
      <div className="topics">
        <button onClick={() => navigate('/aptitude')}>Aptitude</button>
        <button onClick={() => navigate('/verbal')}>Verbal</button>
        <button onClick={() => navigate('/reasoning')}>Reasoning</button>
        <button onClick={() => navigate('/os')}>Operating System</button>
        <button onClick={() => navigate('/coding')}>Coding</button>
      </div>

      <h2>Company Wise Papers</h2>
      <div className="companies">
        <button onClick={() => navigate('/infosys')}>Infosys</button>
        <button onClick={() => navigate('/tcs')}>TCS</button>
        <button onClick={() => navigate('/wipro')}>Wipro</button>
        <button onClick={() => navigate('/microsoft')}>Microsoft</button>
        <button onClick={() => navigate('/google')}>Google</button>
      </div>
    </section>
  );
};

export default Topics;
