
let paragrafi = document.querySelectorAll('p')
let colorBtn = document.querySelector('#colorBtn')
let grBtn = document.querySelector('#grBtn')
let noneBtn = document.querySelector('#noneBtn')


colorBtn.addEventListener('click', ()=>{
    paragrafi.forEach(paragrafo =>{
        let r = Math.floor(Math.random() * 256);  
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256); 
       paragrafo.style.color = `rgb(${r},${g},${b})`
    })
})


grBtn.addEventListener('click', ()=>{
    paragrafi.forEach(paragrafo =>{
        paragrafo.style.fontWeight = 'bold'
    })
})



noneBtn.addEventListener('click', ()=>{
    paragrafi.forEach(paragrafo =>{
        if (paragrafo.style.display == 'block') {
            paragrafo.style.display = 'none'
        } else {
            paragrafo.style.display = 'block' 
        }
    })
})