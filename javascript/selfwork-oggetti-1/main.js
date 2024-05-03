let persona = {
    nome : 'Luca',
    cognome : 'Rossi',
    età: 35,
    salutare : function(){
        console.log(`Ciao a tutti sono ${persona.nome} ${this.cognome} e ho ${this.età} anni` );
    }
}
console.log(persona);
persona.salutare()