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
            }
            giocatore.punteggi.sort((a,b)=> b-a);
            console.log(giocatore);     
        })
        
    },
    
    aggiungi_giocatore : function(nome){
        let nuovo_giocatore = {name:nome , punteggi:[]}
        for (let i = 1; i <= 10 ; i++) {
            nuovo_giocatore.punteggi.push(Math.floor(Math.random() * (10 - 1 +1) + 1))   
        }
        this.giocatori.push(nuovo_giocatore)
        nuovo_giocatore.punteggi.sort((a,b)=> b-a);
        console.log(`Il nuovo giocatore ${nuovo_giocatore.name} è stato aggiunto`);
        console.log(nuovo_giocatore);
    },
    
    
    totale_punteggi : function(){
        this.giocatori.forEach(giocatore =>{
        let totale_punteggio = giocatore.punteggi.reduce((acc,n)=> acc + n);  
        console.log(`Il Punteggio totale di ${giocatore.nome}  ${totale_punteggio}`);
        })
   
    },
   
    vincitore : function(){
     let winner = this.giocatori[0]
     console.log(`Il vincitore è ${winner.name} con ${winner.totale}`); 
    }
    
}

bowling.imposta_punteggi()
bowling.aggiungi_giocatore('Alex')
bowling.totale_punteggi()
bowling.vincitore()

