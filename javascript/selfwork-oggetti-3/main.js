let bowling = {
    giocatori : [
        {nome : 'Paolo' , punteggi :[] },
        {nome : 'Luca' , punteggi : [] },
        {nome : 'Dani' , punteggi :[] },
        {nome : 'Eva' , punteggi :[] },
    ],
    
    imposta_punteggi : function(){
        this.giocatori.forEach(giocatore => {
            for (let i = 1; i <= 10 ; i++) {
                giocatore.punteggi.push(Math.floor(Math.random() * (10 - 1 +1) + 1))   
            };
            giocatore.punteggi.sort((a,b)=> b-a);
            console.log(giocatore);     
        })
        
    },

    aggiungi_giocatore : function(nome){
        let nuovo_giocatore = {nome:nome , punteggi:[]}
        for (let i = 1; i <= 10 ; i++) {
            nuovo_giocatore.punteggi.push(Math.floor(Math.random() * (10 - 1 +1) + 1))   
        }
        this.giocatori.push(nuovo_giocatore)
        nuovo_giocatore.punteggi.sort((a,b)=> b-a);
        console.log(`Il nuovo giocatore ${nuovo_giocatore.nome} è stato aggiunto`);
        console.log(nuovo_giocatore);
    },
    
    
    
    totale_punteggi : function(){
        this.giocatori.forEach(giocatore =>{
            let tot = giocatore.punteggi.reduce((acc,n)=> acc + n);  
            giocatore.totale = tot
         })
        this.giocatori.sort((a,b)=> b.totale-a.totale);
        
    },
   
    vincitore : function(){
        let winner = this.giocatori[0]
        console.log(`Il vincitore è ${winner.nome} con ${winner.totale} punti`); 
    },

    classifica : function(){
        console.log('La classifica è');
        this.giocatori.forEach(giocatore => {
        console.log(`${giocatore.nome}`);
        })
    }
    
}

bowling.imposta_punteggi()
bowling.aggiungi_giocatore('Alex')
bowling.totale_punteggi()
bowling.vincitore()
bowling.classifica()
