let totgatti = 123
let filagatti = 4

let n_file =Math.floor(totgatti / filagatti)
console.log(n_file)

let gatti_avanzo = totgatti % filagatti
console.log(gatti_avanzo)

let gatti_mancanti = filagatti - gatti_avanzo;
console.log(gatti_mancanti)

console.log(`Ci sono ${n_file} file di gatti e ne mancano ${gatti_mancanti} per una nuova fila, con un avanzo di ${gatti_avanzo} gatti`)