import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const SortingHat = ({ house, onComplete }) => {
  useEffect(() => {
    gsap.fromTo(
      '.sorting-hat',
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, onComplete }
    );
  }, [onComplete]);

  return (
    <div className="sorting-hat-container">
      <h2 className="sorting-hat">Sorting... You are in {house}!</h2>
    </div>
  );
};

export default SortingHat;