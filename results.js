import { getFromLocalStorage } from './local-storage-utils.js';
const restart = document.querySelector('#restart');
const pokeData = getFromLocalStorage('POKEMON');
var ctx = document.getElementById('myChart').getContext('2d');
var ctx2 = document.getElementById('myChart2').getContext('2d');

// munging / data wrangling
const pokemonNumbers = [];
const labels = [];
const pokemonEncounters = [];
for (let i = 0; i < pokeData.length; i++) {
    const cartItem = pokeData[i];

    pokemonNumbers.push(cartItem.caught);
    labels.push(cartItem.name);
    pokemonEncounters.push(cartItem.encountered);
}


// const pokemonNumbers = pokeData.map(cartItem => cartItem.captured);

// const labels = pokeData.map(cartItem => cartItem.id);

const colors = [
    'lavender',
    'rgba(54, 162, 235, 0.2)',
    'rgba(255, 206, 86, 0.2)',
    'rgba(75, 192, 192, 0.2)',
    'rgba(153, 102, 255, 0.2)',
    'rgba(25, 159, 64, 0.2)',
    'rgba(55, 159, 64, 0.2)',
    'rgba(205, 159, 64, 0.2)',
    'rgba(299, 159, 64, 0.2)',
    'rgba(195, 159, 64, 0.2)',
    'rgba(25, 159, 64, 0.2)',
    'rgba(95, 159, 64, 0.2)',
    
];
const borders = [
    'orange',
    'rgba(54, 162, 235, 1)',
    'rgba(255, 206, 86, 1)',
    'rgba(75, 192, 192, 1)',
    'rgba(153, 102, 255, 1)',
    'rgba(255, 15, 64, 1)',
    'rgba(255, 59, 64, 1)',
    'rgba(5, 19, 64, 1)',
    'rgba(200, 99, 64, 1)',
    'rgba(155, 359, 64, 1)',
    'rgba(55, 259, 64, 1)',
    'rgba(25, 129, 64, 1)',
];

new Chart(ctx, {
    type: 'bar',
    data: {
        // labels: labels,
        labels,
        datasets: [{
            label: '# of Pokemo Caught',
            data: pokemonNumbers,
            backgroundColor: colors,
            borderColor: borders,
            borderWidth: 5
        }]
    },
    options: {
        scales: {
            xAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
new Chart(ctx2, {
    type: 'bar',
    data: {
        labels,
        datasets: [{
            label: '# Pokemon Enocountered',
            data: pokemonEncounters,
            backgroundColor: colors,
            borderColor: borders,
            borderWidth: 5
        }]
    },
    options: {
        scales: {
            xAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});



restart.addEventListener('click', () => {
    localStorage.clear();
    window.location.href = '../index.html';


})