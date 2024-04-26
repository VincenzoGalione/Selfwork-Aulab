// if/else if/else
let temperatura = prompt ('inserisci  la temperatura');
// if (temperatura <= 20 && temperatura > 0) {
//     console.log('non ci sono più le mezze stagioni');
// }else if (temperatura >= 30 && temperatura <= 45) {
//     console.log('lu mare, lu sole, lu ientu');
// }else if (temperatura < 30 && temperatura > 20) {
//     console.log('mi dia una peroni sudata');
// }else if (temperatura <= 0 && temperatura > -10) {
//     console.log('non e’ tanto il freddo quanto l’umidità');
// }else if (temperatura <= -10 && temperatura >= -40) {
//     console.log('copriti ancora ti raffreddi');
// }else{
//     console.log('temperatura non valida');
// }

// switch
let tempo;
switch (true) {
    case temperatura <= 20 && temperatura > 0:
        tempo = 'non ci sono più le mezze stagioni';
        break;

        case temperatura >= 30 && temperatura <= 45:
        tempo = 'lu mare, lu sole, lu ientu';
        break;

        case temperatura < 30 && temperatura > 20:
            tempo ='mi dia una peroni sudata';
        break;

        case temperatura <= 0 && temperatura > -10:
            tempo = 'non e’ tanto il freddo quanto l’umidità';
        break;

        case temperatura <= -10 && temperatura >= -40:
            tempo = 'copriti ancora ti raffreddi';
        break;
        
    default: 
    temperatura ='temperatura non valida';
        break;
}

console.log(tempo);