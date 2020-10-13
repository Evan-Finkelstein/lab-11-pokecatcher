import { rawPokeData } from './pokemon.js';
// import { findById } from './utils.js';

const radioButtons = document.querySelectorAll('input');
const nextButton = document.querySelector('button');
const caughtSpan = document.querySelector('#caught-span');
const images = document.querySelectorAll('label > img');
const nextDiv = document.querySelector('#next');

export let caughtPokemon = [];
export let pokemonCaught = 0;

function findById(someArray, someId) {
    for (const booger of someArray) {
        if (booger.id === someId) {
            return booger;
        }
    }
}


function getRandomPokemon(array) {
    const index = Math.floor(Math.random() * array.length);

    return array[index];
}



function setupGame() {
    if (pokemonCaught === 10) {
        const stringyMon = JSON.stringify(caughtPokemon);
        localStorage.setItem('POKEMON', stringyMon);
        window.location.href = './results-page/index.html';
    }

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
    };



    console.log(caughtPokemon)

    radioButtons[0].value = pokemon1.id;
    // radioButtons[0].id = pokemon1.id
    images[0].src = pokemon1.url_image;

    radioButtons[1].value = pokemon2.id;
    // radioButtons[1].id = pokemon2.id
    images[1].src = pokemon2.url_image;

    radioButtons[2].value = pokemon3.id;
    // radioButtons[2].id = pokemon3.id
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
        // const poke = {
        //     id: pokemonPicked,
        //     caught: 0,
        // };
       
        const pokester = findById(caughtPokemon, Number(pokemonPicked));
        console.log(pokemonPicked);
        pokester.caught++;
    //  
    }

    
    );
}



setupGame();

nextButton.addEventListener('click', () => {
    setupGame();
});

console.log(caughtPokemon)