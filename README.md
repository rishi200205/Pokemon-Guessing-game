
# Pokemon Guessing Game

This is a React-based Pokémon guessing game. The application fetches a random Pokémon from the PokéAPI, and the player must guess the name of the Pokémon based on its silhouette. Once the guess is submitted, the game reveals the Pokémon's image and tells the player if their guess was correct. After that, the player can proceed to the next Pokémon by clicking the "Next" button.


## Run Locally

Clone the project

```bash
  git clone https://github.com/iiviie/Pokemon-Guessing-game.git
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

Assuming you already have node.js installed , if not install node.js first to use npm (node package manager). 

```bash
  npm install
```

```bash
  npm run dev
```


## Documentation

PokemonImage.jsx:

Displays the Pokémon's image. If the revealPokemon state is false, the Pokémon's silhouette is shown (by reducing the image's brightness and contrast).
##

ElementType.jsx:

Displays the type of the current Pokémon and applies accent colors based on the Pokémon's type.

##
GuessForm.jsx:

A form where the player submits their guess for the Pokémon's name.
##
ResultMessage.jsx:

Shows whether the player's guess was correct or incorrect.

## Features

- Dynamic Background: The main card and button colors change based on the Pokémon's type.
- Interactive Gameplay: The user can submit guesses and see immediate feedback on whether they guessed correctly.
- Responsive Design: The game layout adjusts well on different screen sizes using TailwindCSS.

