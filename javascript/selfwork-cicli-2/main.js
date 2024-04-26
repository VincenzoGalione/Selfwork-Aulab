let counter = 0
let n_dispari = 0;



for (let i = 1; i <= 20; i++) {
     if (i % 2 == 0) {
        console.log(i);
    }else{
        n_dispari += i;
        counter ++
    }
         
 }
   
console.log(`dispari = ${n_dispari}`);
console.log(`counter = ${counter}`);
console.log(`media = ${n_dispari/counter}`);

