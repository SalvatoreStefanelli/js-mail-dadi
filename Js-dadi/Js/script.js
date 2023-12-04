//2 Problema

//Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.

// Creo un array di numeri da 1 a 6 e li metto in una variabile
const numbers = [1, 2, 3, 4, 5, 6];
//console.log(user_numbers);
    
// Creo 2 variabili, una per l'utente e una per il computere, e genero numeri random
const user_numbers = Math.floor(Math.random() * 6) + 1;
console.log(user_numbers);

const pc_numbers = Math.floor(Math.random() * 6) + 1;
console.log(pc_numbers);

// Uso if ed else per stabilire le condizioni di chi ha vinto e chi ha perso
if (user_numbers > pc_numbers) {
    console.log('Winner');
} else if (pc_numbers > user_numbers) {
    console.log('You lost');
} else {
    console.log('Tie! Try again');
}