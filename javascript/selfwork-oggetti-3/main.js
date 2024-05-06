let bowling = {
    giocatori : [
        {'nome' : 'Paolo' , 'punteggi' :[] },
        {'nome' : 'Luca' , 'punteggi' : [] },
        {'nome' : 'Dani' , 'punteggi' :[] },
        {'nome' : 'Eva' , 'punteggi' :[] },
    ],
    
    imposta_punteggi : function(){
        this.giocatori.forEach(giocatore => {
            for (let i = 0; i < 10 ; i++) {
                giocatore.punteggi.push(Math.floor(Math.random() * (10 - 1 +1) + 1),   
            )   
        }
        giocatore.punteggi.sort((a,b)=> b-a);
         console.log(giocatore);     
        })
   
    },

    totale_punteggi : function(){
        this.giocatori.forEach(giocatore =>{
        let totale_punteggio = giocatore.punteggi.reduce((acc,n)=> acc + n);  
        console.log(`Il Punteggio totale di ${giocatore.nome} è ${totale_punteggio}`);
        })
   
    },

    aggiungi_giocatore : function(){
        this.giocatori.push({nome : 'Alex' , 'punteggi': []})
          this.giocatori.filter((giocatore,i) => {
            if (this.giocatori.punteggi = 0) {
                for (let i = 0; i < 10 ; i++) {
                    giocatore.punteggi.push(Math.floor(Math.random() * (10 - 1 +1) + 1),   
                )   
                giocatore.punteggi.sort((a,b)=> b-a);
                // console.log(giocatore);     
                
            }
        }
        })
   
    },
    
}

bowling.imposta_punteggi()
bowling.totale_punteggi()
bowling.aggiungi_giocatore()
console.log(bowling.giocatori);