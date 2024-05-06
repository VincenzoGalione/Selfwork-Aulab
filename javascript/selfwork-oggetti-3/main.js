 
function numbers(valori) {
    if (valori < 10) {
        return ' 1 cifra'
    }else if (valori < 100) {
        return ' 2 cifre'
    }else if (valori < 1000) {
        return ' 3 cifre '
    }else if (valori < 10000) {
        return ' 4 cifre' 
    }else {
        return 'numero troppo grande';
    }   
   
}

console.log(numbers(100));
