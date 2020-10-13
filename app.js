import { rawPokeData } from './pokemon.js';

const radioButtons = document.querySelectorAll('input');
const nextButton = document.querySelector('button');
const caughtSpan = document.querySelector('#caught-span');
const images = document.querySelectorAll('label > img');
const nextDiv = document.querySelector('#next');

export let caughtPokemon = [];
export let pokemonCaught = 0;


function findById(someArray, someId) {
    for (const booger of someArray){
        if(booger.id === someId){
            return booger;
        }}}

function getRandomPokemon(array){
    const index = Math.floor(Math.random() * array.length);
    
    return array[index];
}



function setupGame() {
    if (pokemonCaught === 10) {
        const stringyMon = JSON.stringify(caughtPokemon);
        localStorage.setItem('POKEMON', stringyMon);
        // window.location.href = './results-page/index.html';
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


    radioButtons[0].value = pokemon1.pokemon;
    images[0].src = pokemon1.url_image;

    radioButtons[1].value = pokemon2.pokemon;
    images[1].src = pokemon2.url_image;

    radioButtons[2].value = pokemon3.pokemon;
    images[2].src = pokemon3.url_image;


}

for (let i = 0; i < radioButtons.length; i++) {
    radioButtons[i].addEventListener('change', (e) => 
    {
        pokemonCaught++;
        nextDiv.classList.remove('hidden');
        
        for (let i = 0; i < radioButtons.length; i++) {
            radioButtons[i].disabled = true;
            images[i].style.opacity = .5;
        }

        const pokemonPicked = {
            id: e.target.value,
            quantity: 1,
        };
        const pokester = findById(caughtPokemon, pokemonPicked.id);
        if (pokester === undefined){
            caughtPokemon.push(pokemonPicked);  
        } else {
            pokester.quantity++;
        }
        caughtSpan.textContent = pokemonCaught;
        
        console.log(caughtPokemon);

    }
    );
}



setupGame();

nextButton.addEventListener('click', () => {
    setupGame();
});