import axios from 'axios';

export const fetchPokemons = async (limit = 12) => {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}`);
    return response.data.results.map((pokemon, index) => ({ id: index + 1, name: pokemon.name }));
};

export const fetchPokemonDetails = async (id) => {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    return {
        id: response.data.id,
        name: response.data.name,
        sprite: response.data.sprites.front_default,
        photo: response.data.sprites.front_shiny,
        types: response.data.types.map(typeData => typeData.type.name),
        attack: response.data.stats.find(stat => stat.stat.name === 'attack').base_stat,
        defense: response.data.stats.find(stat => stat.stat.name === 'defense').base_stat,
        hp: response.data.stats.find(stat => stat.stat.name === 'hp').base_stat,
        specialAttack: response.data.stats.find(stat => stat.stat.name === 'special-attack').base_stat,
        specialDefense: response.data.stats.find(stat => stat.stat.name === 'special-defense').base_stat,
        speed: response.data.stats.find(stat => stat.stat.name === 'speed').base_stat,
        weight: response.data.weight,
        totalMoves: response.data.moves.length,
    };
};
