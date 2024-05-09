let p1 = document.querySelectorAll('.p1');
console.dir(p1);
let p2 = document.querySelectorAll('.p2');
console.dir(p2);
let p3 = document.querySelectorAll('.p3');
console.dir(p3);
// p.style.color = 'rgb(250,40,75)'


// primo bottone
let btn1 = document.querySelector('.btn1');
btn1.addEventListener('click', ()=>{
    p1.forEach((p1)=>{
        p1.style.color = 'red'
    })
    p2.forEach((p2)=>{
        p2.style.color = 'blue'
    })
    p3.forEach((p3)=>{
        p3.style.color = 'orange'
    })
});







// secondo bottone
let contenitore = document.querySelectorAll('div');
let btn2 = document.querySelector('.btn2');
btn2.addEventListener('click', ()=>{
    contenitore.forEach((contenitore)=>{
        contenitore.innerHTML = 'strong Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic rem velit praesentium repellendus, deserunt atque rerum, veniam suscipit ab unde neque odio vero animi sint. Error eligendi repudiandae enim dolor.'
        console.log(contenitore);
    })
});



// //  let wrapper = document.querySelectorAll('#wrapper') 


// // terzo bottone
// let btn3 = document.querySelector('.btn3');
// btn3.addEventListener('click', ()=>{
//     p.classList.add('display')
       
    
// });