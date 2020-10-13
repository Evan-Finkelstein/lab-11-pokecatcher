import { rawPokeData } from './pokemon.js';
import { findById } from './utils.js';

const radioButtons = document.querySelectorAll('input');
const nextButton = document.querySelector('button');
const caughtSpan = document.querySelector('#caught-span');
const images = document.querySelectorAll('label > img');
const nextDiv = document.querySelector('#next');
const encounteredSpan = document.querySelectorAll('label > p');
const caughtDiv = document.querySelectorAll('label > div');

let caughtPokemon = [];
let pokemonCaught = 0;




function getRandomPokemon(array) {
    const index = Math.floor(Math.random() * array.length);

    return array[index];
}



function setupGame() {


    nextDiv.classList.add('hidden');

    for (let i = 0; i < radioButtons.length; i++) {
        radioButtons[i].disabled = false;
        radioButtons[i].checked = false;
        images[i].style.opacity = 1;
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
    let allPokemon1 = {
        name: pokemon1.pokemon,
        id: pokemon1.id,
        encountered: 1,
        caught: 0,
    };
    let allPokemon2 = {
        name: pokemon2.pokemon,
        id: pokemon2.id,
        encountered: 1,
        caught: 0,
    };
    let allPokemon3 = {
        name: pokemon3.pokemon,
        id: pokemon3.id,
        encountered: 1,
        caught: 0,

    };
    const poke1 = findById(caughtPokemon, allPokemon1.id)
    if (poke1 === undefined) {
        caughtPokemon.push(allPokemon1);
    } else {
        poke1.encountered++;
    }

    const poke2 = findById(caughtPokemon, allPokemon2.id)
    if (poke2 === undefined) {
        caughtPokemon.push(allPokemon2);
    } else {
        poke2.encountered++;
    }

    const poke3 = findById(caughtPokemon, allPokemon3.id)
    if (poke3 === undefined) {
        caughtPokemon.push(allPokemon3);
    } else {
        poke3.encountered++;
    }





    radioButtons[0].value = pokemon1.id;
    images[0].src = pokemon1.url_image;
    const spanmon1 = findById(caughtPokemon, pokemon1.id);
    caughtDiv[0].textContent = `You've caught ${spanmon1.name} ${spanmon1.caught} times`;
    encounteredSpan[0].textContent = `You've seen ${spanmon1.name} ${spanmon1.encountered} times`;
    radioButtons[1].value = pokemon2.id;
    const spanmon2 = findById(caughtPokemon, pokemon2.id);
    caughtDiv[1].textContent = `You've caught ${spanmon2.name} ${spanmon2.caught} times`;

    encounteredSpan[1].textContent = `You've seen ${spanmon2.name} ${spanmon2.encountered} times`;
    images[1].src = pokemon2.url_image;

    radioButtons[2].value = pokemon3.id;
    const spanmon3 = findById(caughtPokemon, pokemon1.id);
    caughtDiv[2].textContent = `You've caught ${spanmon3.name} ${spanmon3.caught} times`;

    encounteredSpan[2].textContent = `You've seen ${spanmon3.name} ${spanmon3.encountered} times`;
    images[2].src = pokemon3.url_image;




}

for (let i = 0; i < radioButtons.length; i++) {

    radioButtons[i].addEventListener('change', (e) => {
        pokemonCaught++;
        caughtSpan.textContent = pokemonCaught;
        nextDiv.classList.remove('hidden');

        for (let i = 0; i < radioButtons.length; i++) {
            radioButtons[i].disabled = true;
            images[i].style.opacity = .5;

        }
        const pokemonPicked = e.target.value;


        const pokester = findById(caughtPokemon, Number(pokemonPicked));
        pokester.caught++;
    }
    );
}



setupGame();

nextButton.addEventListener('click', () => {

    if (pokemonCaught === 10) {
        const stringyMon = JSON.stringify(caughtPokemon);
        localStorage.setItem('POKEMON', stringyMon);
        window.location.href = './results-page/index.html';
    } else {
        setupGame();
    }
});

