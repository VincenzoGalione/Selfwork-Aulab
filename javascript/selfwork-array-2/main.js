let numbers= [14, 5, 7, 1, 3,];
let somma = numbers.reduce((acc,n)=> acc + n);
console.log(`Il valore della somma è ${somma}`);

let media = somma / numbers.length
console.log(`Il valore della media è ${media}`);

let maggiori = numbers.filter((numbers)=>numbers > media);
console.log(`I valori maggiori della media sono : ${maggiori}`);

let minori = numbers.filter((numbers)=>numbers < media);
console.log(`I valori maggiori della media sono : ${minori}`);