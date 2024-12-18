// src/components/ResultMessage.jsx
import React from 'react';
import '/src/index.css';

const ResultMessage = ({ resultMessage }) => {
  return (
    <div className="fade-in w-full max-w-md mx-4 sm:mx-auto mt-4 p-4 rounded-lg shadow-md border border-gray-300">
      <p className={`text-center rounded-lg text-lg font-semibold ${resultMessage.includes('Correct') ? 'text-green-600 bg-green-100' : 'text-red-600 bg-red-100'}`}>
        {resultMessage}
      </p>
    </div>
  );
};

export default ResultMessage;
