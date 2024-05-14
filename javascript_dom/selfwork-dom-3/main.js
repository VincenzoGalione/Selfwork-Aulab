// bottoni
let startBtn = document.querySelector('#startBtn');
let stopBtn = document.querySelector('#stopBtn');
let resetBtn = document.querySelector('#resetBtn');

// input
let inputNumber = document.querySelector('#inputNumber');
let remaningTime = document.querySelector('#remaningTime');


let interval;
let counter;
let remaningSeconds = 0

startBtn.addEventListener('click', ()=>{
     
    clearInterval(interval);
    counter = inputNumber.value;

    if (remaningSeconds !== 0) {
        counter = remaningSeconds
    }
    
    interval= setInterval(()=>{
        if (counter < 0) {
            clearInterval(interval);
            remaningTime.innerHTML = 'Fine!!'
        }else{
            remaningTime.innerHTML = counter
            counter --  
        }
        },1000)  
});
    

stopBtn.addEventListener('click', ()=>{
   clearInterval(interval)
   remaningSeconds = counter
});


resetBtn.addEventListener('click', ()=>{
    inputNumber.value = '';
    clearInterval(interval);
    remaningTime.innerHTML = ''
});

