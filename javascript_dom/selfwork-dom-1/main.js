
let paragrafi = document.querySelectorAll('p')
let btnColor = document.querySelector('btnColor')
let grBtn = document.querySelector('grBtn')
let noneBtn = document.querySelector('noneBtn')


btnColor.addEventListener('click', ()=>{
    paragrafi.forEach(paragrafo =>{
        let r = Math.floor(Math.random() * (256 - 1) + 1);  
        let g = Math.floor(Math.random() * (256 - 1) + 1);
        let b = Math.floor(Math.random() * (256 - 1) + 1); 
       paragrafo.style.color = `rgb(${r},${g},${b})`
    })
})