let voto = 30
if (voto < 18) {
    console.log('insufficente');  
}else if(voto >= 18 &&  voto < 21) { 
    console.log('sufficente');   
}
else if(voto >= 21 &&  voto < 24) {
    console.log('buono');
}
else if(voto >= 24 &&  voto < 27) {
    console.log('distinto');
}
else if(voto >= 27 &&  voto <= 29) {
    console.log('distinto');
}
else if(voto == 30) {
    console.log('eccellente');
}

let valutazione = '30'
switch (valutazione) {
    case '18':
        console.log('insufficente');
    break;
    case '19':
        console.log('insufficente');
    break;
    case '20':
        console.log('insufficente');
    break;
    case '21':
        console.log('Buono');
    break;
    case '22':
        console.log('buono');
    break;
    case '23':
        console.log('buono');
    break;
    case '24':
        console.log('distinto');
    break;
    case '25':
        console.log('distinto');
    break;
    case '26':
        console.log('distinto');
    break;
    case '27':
        console.log('ottimo');
    break;
    case '28':
        console.log('ottimo');
    break;
    case '29':
        console.log('ottimo');
    break;
    case '30':
        console.log('eccellente');
    break;
    
    default:
        console.log('Questo voto non è valido');
        break;
}