import React, { useState } from 'react';
import Quiz from './components/Quiz';
import SortingHat from './components/SortingHat';
import Result from './components/Result';
import './App.css';

function App() {
  const [stage, setStage] = useState('quiz');
  const [house, setHouse] = useState('');

  const handleQuizComplete = (sortedHouse) => {
    setHouse(sortedHouse);
    setStage('sorting');
  };

  const handleSortingComplete = () => {
    setStage('result');
  };

  return (
    <div className="App">
      {stage === 'quiz' && <Quiz onComplete={handleQuizComplete} />}
      {stage === 'sorting' && <SortingHat house={house} onComplete={handleSortingComplete} />}
      {stage === 'result' && <Result house={house} />}
    </div>
  );
}

export default App;