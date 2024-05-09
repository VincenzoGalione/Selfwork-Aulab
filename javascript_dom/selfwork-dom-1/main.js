
let paragrafi = document.querySelectorAll('p')
let btnColor = document.querySelectorAll('#btnColor')
let grBtn = document.querySelectorAll('#grBtn')
let noneBtn = document.querySelectorAll('#noneBtn')


btnColor.addEventListener('click', ()=>{
    paragrafi.forEach(paragrafo =>{
        let r = Math.floor(Math.random() * 256);  
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256); 
       paragrafo.style.color = `rgb(${r},${g},${b})`
    })
})


grBtn.addEventListener('click', ()=>{
    paragrafi.forEach(paragrafo=>{
        paragrafo.style.fontWeight = 'bold'
    })
})