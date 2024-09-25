import React, { useState, useEffect } from 'react';
import '../styling/prompts.css';
import getQuestions from '../services/Question/getQuestions';

const Prompts = () => {
  const [prompts, setPrompts] = useState([]);
  const [selectedPrompts, setSelectedPrompts] = useState([]);
  const [showAnswerButton, setShowAnswerButton] = useState(false);
  const [currentPrompt, setCurrentPrompt] = useState('');
  const [answers, setAnswers] = useState({});

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const questions = await getQuestions();
        setPrompts(questions);
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    };

    fetchQuestions();
}, []);

  const togglePromptSelection = (prompt) => {
    const selectedIndex = selectedPrompts.indexOf(prompt);
    let newSelectedPrompts = [...selectedPrompts];
    if (selectedIndex === -1) {
      if (selectedPrompts.length < 3) {
        newSelectedPrompts.push(prompt);
      }
    } else {
      newSelectedPrompts.splice(selectedIndex, 1);
    }
    setSelectedPrompts(newSelectedPrompts);
    setShowAnswerButton(newSelectedPrompts.length > 0);
  };
  const handleAnswerSubmit = (e) => {
    e.preventDefault();
    if (currentPrompt) {
      setAnswers({ ...answers, [currentPrompt]: e.target.answer.value });
      const nextPrompt = selectedPrompts[selectedPrompts.indexOf(currentPrompt) + 1];
      setCurrentPrompt(nextPrompt || '');
    }
  };
  return (
    <div className="prompts-page-container">
      <div className="prompts-container">
        <h1>Prompts</h1>
        {/* New text added here */}
        <p className="prompts-subtitle">
          Choose up to 3 questions for your roomies to get to know you!
        </p>
        
        <div className="prompt-list">
          {prompts.map((prompt, index) => (
            <div key={index} className="prompt-item" onClick={() => togglePromptSelection(prompt)}>
              <input
                type="checkbox"
                className="checkbox-style"
                checked={selectedPrompts.includes(prompt)}
                onChange={() => togglePromptSelection(prompt)}
              />
              <label className="prompt-label">{prompt.question}</label>
            </div>
          ))}
        </div>
        
        {showAnswerButton && (
          <button className="answer-btn" onClick={() => setCurrentPrompt(selectedPrompts[0])}>
            Answer Selected Prompts
          </button>
        )}
        {currentPrompt && (
          <div className="answer-box">
            <h2 className="prompt-title">{currentPrompt.question}</h2>
            <form onSubmit={handleAnswerSubmit}>
              <textarea 
                name="answer" 
                placeholder="Type your answer here..." 
                required 
                className="answer-textarea"
              />
              <button type="submit" className="next-btn">Next</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
export default Prompts;