 let nome = 'Lucia';
 let telefono = 326451645;
 
 let agenda = {
    contatti : [
    {nome : 'Luca', telefono: 3331111111},
    {nome : 'Matteo', telefono: 3332222222},
    {nome : 'Maria', telefono: 33344444444},
    {nome : 'Clara', telefono: 33355555555},
    ],

    mostra_contatti : function () {
        this.contatti.forEach(contatto => {
            console.log(`${contatto.nome}, ${contatto.telefono}`);
        })
    },

    mostra_contatto : function(nome){
        let contatto = this.contatti.find(contatto => contatto.nome == nome)
        if (contatto) {
            console.log(`Il contatto è stato trovato : ${contatto.nome}, ${contatto.telefono}`);
        }else{
            console.log('Contatto non trovato');
        }
    },

    rimuovi_aggiungi_contatto : function (nome, telefono){
        let contatto = this.contatti.find(contatto => contatto.nome == nome)
        let index = this.contatti.indexOf(contatto);
        if (contatto) {
            this.contatti.splice(index, 1)
            console.log('Il contatto è stato eliminato');
        }else{
            this.contatti.push({nome: nome, telefono: telefono})
            console.log('Il contatto è stato aggiunto');
        }
    },

    modifica_contatto : function(nome, nuovo_numero){
        let contatto = this.contatti.find(contatto => contatto.nome == nome)
        if (contatto) {
            console.log('Il contatto è stato modificato');
            contatto.telefono = nuovo_numero
        }else{
            console.log('Contatto non trovato');
        }
    }
    
 }

// mostro tutti i contatti
agenda.mostra_contatti();

// mostro un singolo contatto
agenda.mostra_contatto('Anna')
 
// rimuovi contatto
agenda.rimuovi_aggiungi_contatto('Maria');
 
// aggiungi contatto
agenda.rimuovi_aggiungi_contatto(nome, telefono)
 
// modifica contatto
agenda.modifica_contatto('Paolo', 4)

// mostro tutti i contatti
agenda.mostra_contatti();