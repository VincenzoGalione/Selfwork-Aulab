let input = document.querySelector('input')
let areatext = document.querySelector('#areatext')
let wrapper = document.querySelector('#wrapper')
let btn = document.querySelector('#btn')


let date = new Date();
let formatDate = date.toLocaleDateString()


btn.addEventListener('click',()=>{
    if ( input.value  == 0) {
        alert(' Nessun valore inserito nel primo riquadro! inserisci testo')
    }else if (areatext.value == 0) {
        alert(' Nessun valore inserito nel secondo riquadro! inserisci testo')
    }else{
        wrapper.innerHTML =`<p>${input.value}, ${areatext.value}, Data ${formatDate} </p>`
    }
})

