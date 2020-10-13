import { caughtPokemon } from './app.js';
import { pokemonCaught } from './app.js';
const pokeDiv = document.querySelector('#poke-div');

pokeDiv.textContent = `Your pary is full! You caught ${pokemonCaught} Pokemon! They were ${caughtPokemon}`;