
let scelta;

do {
    scelta =Number(prompt('Inserisci il numero corrispondente alla bevanda:\n 1 Acqua \n 2 Coca-cola \n 3 Birra'));
    switch (scelta) {
        case 1:
            console.log('E’ stata selezionata l’acqua');
            break;
        case 2:
            console.log('E’ stata selezionata la coca cola');
             break;
        case 3:
            console.log('E’ stata selezionata la birra');
         break;
        default:
            console.log('la scelta inserita non è valida, riprova');
            break;
    }
} while (scelta <1 || scelta > 3 );