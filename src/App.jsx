import './index.css';
import React, { useState, useEffect } from 'react';
import PokemonImage from './components/GetPokemonImage';
import GuessForm from './components/Guess';
import ResultMessage from './components/ResultMessage';
import ElementType from './components/ElementType';

const App = () => {
  const [pokemonSprite, setPokemonSprite] = useState(null);
  const [pokemonName, setPokemonName] = useState('');
  const [resultMessage, setResultMessage] = useState('');

  const [pokemonType, setPokemonType] = useState('')

  const [revealPokemon, setRevealPokemon] = useState(false);
  const [gameOver, setGameOver] = useState(false); 


  useEffect(() => {
    fetchRandomPokemon();
  }, []); 

  
  const fetchRandomPokemon = async () => {
    const randomId = Math.floor(Math.random() * 200) + 1;

    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
      const data = await response.json();

      
      const pokemonSprite = data.sprites.other['official-artwork'].front_default;

      setPokemonSprite(pokemonSprite); 
      setPokemonName(data.name);
      setRevealPokemon(false);
      setResultMessage(''); 
      setGameOver(false); 

      setPokemonType(data.types[0].type.name);

    } catch (error) {
      console.error('Error fetching Pokémon:', error);
    }
  };

 
  const handleGuessSubmit = (guess) => {
    setRevealPokemon(true); 

    if (guess.toLowerCase() === pokemonName.toLowerCase()) {
      setResultMessage('Correct! You guessed the Pokémon!');
    } else {
      setResultMessage(`Incorrect. The Pokémon was ${pokemonName}.`);
    }

    setGameOver(true);
  };

  return (
    <div className="flex justify-center items-center flex-col bg-gray-100 ">
       <h6 className='text-xl bg-black pl-20 pr-20 rounded-lg text-white mt-5 pt-2 pb-2'>GUESS WHO's THAT POKEMON</h6>
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
     <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md mx-4 sm:mx-auto"
        style={{
          background: `radial-gradient(circle at 50% 0%, ${ElementType.getColor(pokemonType)} 36%, #ffffff 36%)`,
          borderColor: ElementType.getColor(pokemonType),
        }}>

      <PokemonImage pokemonSprite={pokemonSprite} revealPokemon={revealPokemon}/>

      <ElementType type={pokemonType} />

      {pokemonSprite && !revealPokemon && (
        <GuessForm onGuessSubmit={handleGuessSubmit} className="mt-4" />
      )}

      {resultMessage && (
        <ResultMessage resultMessage={resultMessage} className="mt-4" />
      )}

            <div className="flex justify-center mt-4">
              {gameOver && (
                <button
                  onClick={fetchRandomPokemon}
                  className="block py-4 px-16 text-lg text-white relative my-8 border-0 rounded transition-all transform hover:scale-105"
                  style={{ backgroundColor: ElementType.getColor(pokemonType) }}
                >
                  Next
                </button>
              )}
            </div>

      {/* <p className="mt-4 text-lg font-semibold text-center">{pokemonName}</p>  */}
      
       {/* if you want to either cheat or just want to check do testing un-comment the p tag and the name of the pokemon should be displayed at the bottom of the card */}

    </div>
  </div>
  </div>
  );
};

export default App;
