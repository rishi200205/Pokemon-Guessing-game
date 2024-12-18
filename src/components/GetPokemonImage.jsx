import React from 'react';
import '/src/index.css';

const PokemonImage = ({ pokemonSprite, revealPokemon }) => {
  return (
    <div className="pokemon-image-container">
      {pokemonSprite ? (
        <img
          src={pokemonSprite}
          alt="Pokémon"
          className={`pokemon-image ${revealPokemon ? 'reveal' : ''}`}
          style={{
            filter: revealPokemon ? 'none' : 'brightness(0) contrast(0)',
          }}
        />
      ) : (
        <p>Loading Pokémon...</p>
      )}
    </div>
  );
};

export default PokemonImage;
