// import React from 'react';
//
// const Pokemon = ({ pokemon, onClick }) => (
//     <div onClick={onClick} style={styles.container}>
//         <div style={styles.imageContainer}>
//             {pokemon.sprite && <img src={pokemon.sprite} alt={pokemon.name} style={styles.image} />}
//         </div>
//         <div style={styles.name}>{pokemon.name}</div>
//         <div style={styles.types}>
//             {pokemon.types && pokemon.types.map((type, index) => (
//                 <span key={index} style={styles.type}>{type}</span>
//             ))}
//         </div>
//     </div>
// );
//
// const styles = {
//     container: {
//         border: '1px solid black',
//         padding: '10px',
//         margin: '5px',
//         cursor: 'pointer',
//         textAlign: 'center',
//     },
//     imageContainer: {
//         width: '100%',
//         height: '90px',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#f0f0f0',
//     },
//     image: {
//         width: '80px',
//         height: '80px',
//     },
//     name: {
//         fontWeight: 'bold',
//     },
//     // Стилі для відображення типів покемона
//     types: {
//         marginTop: '5px',
//     },
//     type: {
//         padding: '2px 5px',
//         borderRadius: '3px',
//         backgroundColor: '#f0f0f0',
//         marginRight: '3px',
//     },
// };
//
// export default Pokemon;
