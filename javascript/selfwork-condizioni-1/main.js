// if/else  if/else
let voto = 30;

// if (voto < 18) {
//     console.log('insufficente');  
// }else if(voto >= 18 &&  voto < 21) { 
//     console.log('sufficente');   
// }else if(voto >= 21 &&  voto < 24) {
//     console.log('buono');
// }else if(voto >= 24 &&  voto < 27) {
//     console.log('distinto');
// }else if(voto >= 27 &&  voto <= 29) {
//     console.log('distinto');
// }else if(voto == 30) {
//     console.log('eccellente');
// }else{
//     console.log('voto non valido');
// }


// switch
let valutazione;
switch (true) {
    case voto < 18:
        console.log('insufficente');
    break;

    case voto >= 18 &&  voto < 21:
        console.log('sufficente');
    break;

    case voto >= 21 &&  voto < 24:
        console.log('buono');
    break;

    case voto >= 24 &&  voto < 27:
        console.log('distinto');
    break;

    case voto >= 27 &&  voto <= 29:
        console.log('ottimo');
    break;
    
    case voto == 30:
        console.log('eccellente');
    break;
    
    default:
        console.log('Questo voto non è valido');
    break;
}