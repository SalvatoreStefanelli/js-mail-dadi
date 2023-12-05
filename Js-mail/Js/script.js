//Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.

// Creo un array con email per l'accesso
const email = ['Naruto@gmail.com', 'Levi@libero.it', 'RoronoaZoro@hotmail.it'];

// Chiedo all'utente la sua mail con il prompt e lo salvo in una variabile
const user_mail = prompt('Enter your email');
//console.log(user_mail);

// Creo un ciclo per elencare la lista
for (let i = 0; i < email.length; i++) {
    const element = email[i];
    //console.log(element); 
    
    // Se la mail dell'utente è presente nel ciclo, stampo il messaggio 'Access Allowed'
     if (user_mail == element) {
         console.log('Access Allowed');

         // Altrimenti stampo il messaggio 'Access Denied' 
     } else {
         console.log('Access Denied');
     }
}





