 let agenda = {
    'contatti' : [
    {'nome' : 'Luca', 'telefono': 3331111111},
    {'nome' : 'Matteo', 'telefono': 3332222222},
    {'nome' : 'Maria', 'telefono': 33344444444},
    {'nome' : 'Clara', 'telefono': 33355555555},
    ],

    mostra_contatti : function () {
        agenda.contatti.forEach((contatto) => console.log(contatto));
    },

    rimuovi_contatto : function (nome_rimosso){
        let index = this.contatti.indexOf(nome_rimosso);
        this.contatti.splice(index,1);
        console.log(index);   
    },

    aggiungi_contatto : function(){}
 }


//  console.log(agenda);
// mostro tutti i contatti
// agenda.mostra_contatti();

// mostro un singolo contatto
// console.log(agenda.contatti[0]);

// rimuovi contatto
agenda.rimuovi_contatto('Maria');

