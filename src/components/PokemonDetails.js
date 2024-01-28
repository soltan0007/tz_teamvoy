import React from 'react';

const PokemonDetails = ({ pokemon }) => (
    <div style={styles.container}>
        {pokemon && (
            <div>
                <div style={styles.header}>
                    <img src={pokemon.sprite} alt={pokemon.name} style={styles.image} />
                    <h2>{pokemon.name} #00{pokemon.id}</h2>
                </div>
                <table style={styles.table}>
                    <tbody>
                    <tr>
                        <td style={styles.td}>Type</td>
                        <td style={styles.td}>{pokemon.types.join(', ')}</td>
                    </tr>
                    <tr>
                        <td style={styles.td}>Attack</td>
                        <td style={styles.td}>{pokemon.attack}</td>
                    </tr>
                    <tr>
                        <td style={styles.td}>Defense</td>
                        <td style={styles.td}>{pokemon.defense}</td>
                    </tr>
                    <tr>
                        <td style={styles.td}>HP</td>
                        <td style={styles.td}>{pokemon.hp}</td>
                    </tr>
                    <tr>
                        <td style={styles.td}>Special Attack</td>
                        <td style={styles.td}>{pokemon.specialAttack}</td>
                    </tr>
                    <tr>
                        <td style={styles.td}>Special Defense</td>
                        <td style={styles.td}>{pokemon.specialDefense}</td>
                    </tr>
                    <tr>
                        <td style={styles.td}>Speed</td>
                        <td style={styles.td}>{pokemon.speed}</td>
                    </tr>
                    <tr>
                        <td style={styles.td}>Weight</td>
                        <td style={styles.td}>{pokemon.weight}</td>
                    </tr>
                    <tr>
                        <td style={styles.td}>Total Moves</td>
                        <td style={styles.td}>{pokemon.totalMoves}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        )}
    </div>
);

const styles = {
    container: {
        textAlign: 'center',
        marginTop: '50px',
        border: '1px solid black',
        width: '300px',
        height: 'fit-content',
        paddingTop: '5px',
        paddingBottom: '25px'
    },
    header: {
        marginBottom: '20px',
    },
    image: {
        width: '150px',
        height: '150px',
    },
    table: {
        margin: '0 auto',
        borderCollapse: 'collapse',
    },
    td: {
        padding: '8px',
        border: '1px solid black',
    },
};

export default PokemonDetails;
