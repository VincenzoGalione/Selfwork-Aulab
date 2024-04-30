let n = prompt('Quanti tiri effettuare') ;


function lanci(giocatore){
    let punteggio = 0;
    
    for (let i = 0; i < n; i++) {
        punteggio +=Math.floor(Math.random() * (6 - 1) + 1);    
    }

    return punteggio;
}


let player1 = lanci ('Vincenzo');
console.log(` Il totale di Vincenzo è ${player1}`);

let player2 = lanci ('Matteo');
console.log(` Il totale di Matteo è ${player2}`);

if (player1 > player2) {
    console.log(`Il vincitore è Vincenzo`);
}else if (player1 < player2){
    console.log(`Il vincitore è Matteo`)
}else{
    console.log('Pareggio');
}
