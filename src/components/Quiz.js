import React, { useState } from 'react';

const Quiz = ({ onComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState({ Gryffindor: 0, Slytherin: 0, Ravenclaw: 0, Hufflepuff: 0 });

  const questions = [
    {
      question: 'Which quality do you value most?',
      options: [
        { text: 'Courage', house: 'Gryffindor', score: 1 },
        { text: 'Ambition', house: 'Slytherin', score: 1 },
        { text: 'Intelligence', house: 'Ravenclaw', score: 1 },
        { text: 'Loyalty', house: 'Hufflepuff', score: 1 },
      ],
    },
  ];

  const handleAnswer = (house, score) => {
    setScores((prev) => ({ ...prev, [house]: prev[house] + score }));
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      const sortedHouse = Object.keys(scores).reduce((a, b) => (scores[a] > scores[b] ? a : b));
      onComplete(sortedHouse);
    }
  };

  return (
    <div className="quiz-container">
      <h2>{questions[currentQuestion].question}</h2>
      <div>
        {questions[currentQuestion].options.map((option, index) => (
          <button key={index} onClick={() => handleAnswer(option.house, option.score)}>
            {option.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Quiz;