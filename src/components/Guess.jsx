// src/components/GuessForm.jsx
import React, { useState } from 'react';
import '/src/index.css';

const GuessForm = ({ onGuessSubmit }) => {
  const [userGuess, setUserGuess] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onGuessSubmit(userGuess);
    setUserGuess(''); 
  };

  return (
    <form onSubmit={handleSubmit} className='w-full flex flex-col items-center mt-4 bg-white p-4  rounded-lg '>
      <input
        type="text"
        className='border border-gray-300 rounded-lg px-4 py-2 mb-4 w-full max-w-xs focus:outline-none focus:ring-2 focus:ring-blue-500'
        placeholder="Guess the Pokémon's name"
        value={userGuess}
        onChange={(e) => setUserGuess(e.target.value)
        }
      />
      <button
        type="submit"
        className="block py-4 px-10 text-lg bg-[#101010] text-white relative my-8 border-0 rounded"
      >
        Submit Guess
      </button>
    </form>
  );
};

export default GuessForm;
