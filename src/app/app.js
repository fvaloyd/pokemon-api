class Pokemon{
    constructor(name){
        this.name = name;
    }
    async getPokemon(){
        const URI = `https://pokeapi.co/api/v2/pokemon/${this.name}`;
        const response = await fetch(URI);
        const data = await response.json();

        return data;
    }
    changePokemon(name){
        this.name = name;
    }
};
class UI{
    constructor(){
        this.pokemonImg = document.getElementById('pokemon-img');
        this.pokemonName = document.getElementById('pokemon-name');
        this.pokemonHabilidad = document.getElementById('pokemon-habilidad');
        this.pokemonPeso = document.getElementById('pokemon-peso');
    }
    render(pokemon){
        this.pokemonImg.src = pokemon.sprites.front_default;
        this.pokemonName.textContent = "Name: " + pokemon.species.name;
        this.pokemonHabilidad.textContent = "Type: " + pokemon.types[0].type.name;
        this.pokemonPeso.textContent = "Weight: " + pokemon.weight;

    }
}

const ui = new UI();
const pokemon = new Pokemon('pikachu');

async function fetchPokemon(){
    const data = await pokemon.getPokemon();
    ui.render(data);
}


document.getElementById('p-change-btn').addEventListener('click', (e) => {
    e.preventDefault();
    const pName = document.getElementById('name').value;
    pokemon.changePokemon(pName);
    fetchPokemon()
});

document.addEventListener('DOMContentLoaded', fetchPokemon);