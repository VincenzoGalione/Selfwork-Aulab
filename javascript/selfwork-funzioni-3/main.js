 
function numbers(valori) {
    if (valori < 10) {
        console.log('Il  è formato da 1 cifra');
    }else if (valori < 100) {
        console.log('Il valore  è formato da 2 cifre ');
    }else if (valori < 1000) {
        console.log('Il valore  è formato da 3 cifre ');
    }else if (valori < 10000) {
        console.log('Il valore  è formato da 4 cifre ');
    }else {
        console.log('Numero troppo grande');
    }   
    return 
}


numbers(12000)