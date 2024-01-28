import React from 'react';

const PokemonList = ({ pokemons, onClick }) => (
    <div style={styles.container}>
        {pokemons.map(pokemon => (
            <div key={pokemon.id} style={styles.item} onClick={() => onClick(pokemon.id)}>
                <div style={styles.pokemonContainer}>
                    <div style={styles.imageContainer}>
                        {pokemon.sprite && <img src={pokemon.sprite} alt={pokemon.name} style={styles.image} />}
                    </div>
                    <div style={styles.details}>
                        <div style={styles.name}>{pokemon.name}</div>
                        <div style={styles.types}>
                            {pokemon.types && pokemon.types.map((type, index) => (
                                <span key={index} style={styles.type}>{type}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        ))}
    </div>
);

const styles = {
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    item: {
        width: '30%',
        margin: '5px',
        cursor: 'pointer',
    },
    pokemonContainer: {
        border: '1px solid black',
        padding: '10px',
        textAlign: 'center',
    },
    imageContainer: {
        width: '100%',
        height: '90px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
    },
    image: {
        width: '80px',
        height: '80px',
    },
    details: {
        marginTop: '5px',
    },
    name: {
        fontWeight: 'bold',
    },
    types: {
        marginTop: '5px',
    },
    type: {
        padding: '2px 5px',
        borderRadius: '3px',
        backgroundColor: '#f0f0f0',
        marginRight: '3px',
    },
};

export default PokemonList;