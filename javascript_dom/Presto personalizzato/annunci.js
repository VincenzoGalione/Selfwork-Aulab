let sword = document.querySelector('#sword');
let check = false;



sword.addEventListener('click', ()=>{
    if (check == false) {
        sword.style.transform = 'rotate(+90deg)'
        check = true
        
    }else{
        sword.style.transform = 'rotate(0deg)'
        check = false
    }
});


fetch('/annunci.json').then((response)=>response.json()).then((data)=>{

});