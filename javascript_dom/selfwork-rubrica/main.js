let contactsWrapper = document. querySelector('#contactsWrapper');

// bottoni
let showContactsBtn = document.querySelector('#showContactsBtn');
let addContactsBtn = document.querySelector('#addContactsBtn');
let removeContactsBtn = document.querySelector('#removeContactsBtn');
let changeContactsBtn = document.querySelector('#changeContactsBtn');

// inputs
let nameInput = document.querySelector('#nameInput');
let numberInput = document.querySelector('#numberInput');


// variabile di appoggio
check = false;

let rubrica = {
    lista_contatti : [
        {contact_name :'Goku', phone_number : 251252639},
        {contact_name :'Vegeta', phone_number : 4555555555},
        {contact_name :'Trunks', phone_number : 555554444},
    ],
    
    // mostra contatti
    showContacts : function (){
        contactsWrapper.innerHTML = '';
        this.lista_contatti.forEach((contatto)=>{
            let div = document.createElement('div');
            div.classList.add('card-custom');
            div.innerHTML= `
                <p class="lead">${contatto.contact_name}</p>
                <p class="numero">${contatto.phone_number}</p>
                <i class="fa-solid fa-trash-can icon"></i>
            `;
            contactsWrapper.appendChild(div);
        });

    },

    //  aggiungi contatti
    addContact : function(newName, newNumber){
        if (newName && newNumber) {
            this.lista_contatti.push({contact_name : newName, phone_number : newNumber});
            rubrica.showContacts();
            if (check == false) {
                check = true;  
                showContactsBtn.innerHTML = 'Nascondi contatti';
            }
        }else if (newName == 0) {
            alert('Non hai aggiunto il nome, riprova!')
        }else if (newNumber == 0) {
            alert('Non hai aggiunto il numero, riprova!') 
        }
    },

    // rimuovi contatti
    removeContact : function (removedName){
        let names = this.lista_contatti.map((contatto)=>contatto.contact_name);
        let index = names.indexOf(removedName);
        if (index >= 0) {
            this.lista_contatti.splice(index, 1);
            rubrica.showContacts();
            if (check == false) {
                  check = true;  
                  showContactsBtn.innerHTML = 'Nascondi contatti';
              }
          }else{
              alert('Non hai aggiunto il nome, riprova!' )
          }
    },
      
      
    // modifica contatto
    changeContact : function (changeName){
        let names = this.lista_contatti.map((contatto)=>contatto.contact_name);
        let index = names.indexOf(changeName);
        if (index >= 0) {
            this.lista_contatti.filter(n,index, ()=>{
                console.log(true);
                rubrica.showContacts();
            }  );
            if (check == false) {
                  check = true;  
                  showContactsBtn.innerHTML = 'Nascondi contatti';
              }
          }else{
              alert('Non hai aggiunto il nome, riprova!' )
          }
    },
    
    
};


showContactsBtn.addEventListener('click',()=>{
    if (check == false) {
        rubrica.showContacts();
        check = true;  
        showContactsBtn.innerHTML = 'Nascondi contatti';
    }else{
        contactsWrapper.innerHTML = '';
        check = false;
        showContactsBtn.innerHTML = 'Mostra contatti';
    }
});


addContactsBtn.addEventListener('click', ()=>{
    rubrica.addContact(nameInput.value, numberInput.value)
    nameInput.value = '';
    numberInput.value = '';  
});



removeContactsBtn.addEventListener('click', ()=>{
    rubrica.removeContact(nameInput.value);
    nameInput.value = '';
})


changeContactsBtn.addEventListener('click', ()=>{
    rubrica.changeContact(nameInput.value);
    nameInput.value = ''
})