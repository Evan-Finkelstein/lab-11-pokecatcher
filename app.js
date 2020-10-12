import { rawPokeData } from './pokemon.js';

const radioButtons = document.querySelectorAll('input');
const nextButton = document.querySelector('button');
const caughtSpan = document.querySelector('#caught-span');
const images = document.querySelectorAll('label > img');

// initialize state
let pokemonCaught = 0;

function getRandomPokemon(array){
    const index = Math.floor(Math.random() * array.length);
    
    return array[index];
}
let pokemon1 = getRandomPokemon(rawPokeData)
let pokemon2 = getRandomPokemon(rawPokeData)
let pokemon3 = getRandomPokemon(rawPokeData)

while (pokemon1.id === pokemon2.id) {
    pokemon1 = getRandomPokemon(rawPokeData);
}

while (pokemon2.id === pokemon3.id) {
    pokemon2 = getRandomPokemon(rawPokeData);
}
while (pokemon3.id === pokemon1.id) {
    pokemon3 = getRandomPokemon(rawPokeData);
}


radioButtons[0].value = pokemon1.id;
images[0].src = pokemon1.url_image;

radioButtons[1].value = pokemon2.id;
images[1].src = pokemon2.url_image;

radioButtons[2].value = pokemon3.id;
images[2].src = pokemon3.url_image;

// set event listeners to update state and DOM