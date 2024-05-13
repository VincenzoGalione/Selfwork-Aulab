let input = document.querySelector('input')
let textarea = document.querySelector('textarea')
let contenitore = document.querySelector('.contenitore')
let btn = document.querySelector('.btn')




btn.addEventListener('click',()=>{
    let date = new Date();
    let formatDate = date.toLocaleDateString()
    
    if ( input.value  == 0) {
        alert(' Nessun valore inserito nel primo riquadro! inserisci testo')
    }else if (textarea.value == 0) {
        alert(' Nessun valore inserito nel secondo riquadro! inserisci testo')
    }else{
        let div = document.createElement('div')
        div.innerHTML= `<h3>${input.value}</h3> <p>${textarea.value}</p> <p>${formatDate}</p>`
        let r = Math.floor(Math.random() * 256);  
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256); 
        div.style.backgroundColor = `rgb(${r},${g},${b})`
        div.style.border = '2px solid'
        div.style.marginTop = '15px '
        contenitore.appendChild(div)
        input.value = ``
        textarea.value = ``
    }
})

