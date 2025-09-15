import React, { useState } from 'react';
import './Quiz.css';

function Quiz() {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const question = "What is 2 × 4?";
  const answers = [
    { id: 1, text: "6", isCorrect: false },
    { id: 2, text: "8", isCorrect: true },
    { id: 3, text: "10", isCorrect: false },
    { id: 4, text: "12", isCorrect: false }
  ];

  const handleAnswerClick = (answerId) => {
    setSelectedAnswer(answerId);
    setShowResult(true);
  };

  const resetQuiz = () => {
    setSelectedAnswer(null);
    setShowResult(false);
  };

  return (
    <div className="quiz-container">
      <h2 className="question">{question}</h2>
      <div className="answers-container">
        {answers.map((answer) => (
          <button
            key={answer.id}
            className={`answer-button ${
              selectedAnswer === answer.id
                ? answer.isCorrect
                  ? 'correct'
                  : 'incorrect'
                : showResult && answer.isCorrect
                ? 'correct-answer'
                : ''
            }`}
            onClick={() => handleAnswerClick(answer.id)}
            disabled={showResult}
          >
            {answer.text}
          </button>
        ))}
      </div>
      {showResult && (
        <div className="result-section">
          <p className={`result-message ${
            answers.find(a => a.id === selectedAnswer)?.isCorrect ? 'correct' : 'incorrect'
          }`}>
            {answers.find(a => a.id === selectedAnswer)?.isCorrect 
              ? "Correct! Well done!" 
              : "Incorrect. The correct answer is 8."
            }
          </p>
          <button className="reset-button" onClick={resetQuiz}>
            Try Again
          </button>
        </div>
      )}
    </div>
  );
}

export default Quiz;
