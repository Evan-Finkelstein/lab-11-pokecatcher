function getFromLocalStorage(key) {
    // remember, we need to parse any values get from local storage
    const item = localStorage.getItem(key);

    return JSON.parse(item);
}

// this function will not return anything
 function setInLocalStorage(key, value) {
    // remember, we need to stringify any values we want to set into local storage
    const stringyItem = JSON.stringify(value);
    localStorage.setItem(key, stringyItem);
}
 function findById(someArray, someId) {
    for (const booger of someArray){
        if(booger.pokemon === someId){
            return booger;
    }
}
}  

export function setPokemon(pokemon){
    const poke = getFromLocalStorage('POKEMON') || [];
    const pokeInParty = findById (poke, pokemon.pokemon);
    if (pokeInParty === undefined){
        const newPoke = {
            id: pokemon.pokemon,
            quantity: 1,
        };
        poke.push(newPoke);
    } else { 
        pokeInParty.quantity++;
    }
    
    setInLocalStorage('POKEMON', poke);
}
    