import React, { useState, useEffect } from 'react';
import { fetchPokemons, fetchPokemonDetails } from './services/pokemonService'
import PokemonList from './components/PokemonList';
import PokemonDetails from './components/PokemonDetails';

const App = () => {
  const [pokemons, setPokemons] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPokemons();
      setPokemons(data);
    };

    fetchData();
  }, []);

  const loadMorePokemons = async () => {
    const newPokemons = await fetchPokemons(pokemons.length + 6);
    setPokemons(newPokemons);
  };

  const loadPokemonDetails = async (id) => {
    const pokemonDetails = await fetchPokemonDetails(id);
    setSelectedPokemon(pokemonDetails);
  };

  return (
      <div style={styles.appContainer}>
        <div style={styles.titleContainer}>
          <h1>Pokedex</h1>
        </div>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <div style={{width: '49%'}}>
            <PokemonList pokemons={pokemons} onClick={loadPokemonDetails}/>
            <button style={styles.button} onClick={loadMorePokemons}>Load More</button>
          </div>
          <div style={{width: '49%'}}>
            {selectedPokemon && <PokemonDetails pokemon={selectedPokemon}/>}
          </div>
        </div>
      </div>
  );
}
const styles = {
  appContainer: {
    textAlign: 'center',
  },
  titleContainer: {
    border: '1px solid black',
    margin: '10px auto',
    width: '500px',
    padding: '5px',
    fontSize: '10px'
  },
  button: {
    width: '650px',
    height: '40px',
    background: '#0099ff',
    color: 'white',
    borderRadius: '5px',
    fontSize: '15px',
    fontWeight: 'bold',
    marginTop: '10px'
  }
};
export default App;