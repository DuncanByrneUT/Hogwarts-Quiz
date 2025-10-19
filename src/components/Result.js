import React from 'react';

const Result = ({ house }) => {
  const houses = {
    Gryffindor: { color: 'red', desc: 'Brave and chivalrous' },
    Slytherin: { color: 'green', desc: 'Cunning and ambitious' },
    Ravenclaw: { color: 'blue', desc: 'Wise and creative' },
    Hufflepuff: { color: 'yellow', desc: 'Loyal and kind' },
  };

  return (
    <div className="result-container" style={{ backgroundColor: houses[house].color }}>
      <h1>{house}</h1>
      <p>{houses[house].desc}</p>
    </div>
  );
};

export default Result;