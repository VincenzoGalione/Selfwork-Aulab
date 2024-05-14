// bottoni
let startBtn = document.querySelector('#startBtn');
let stopBtn = document.querySelector('#stopBtn');
let resetBtn = document.querySelector('#resetBtn');

// input
let inputNumber = document.querySelector('#inputNumber');

startBtn.addEventListener('click', ()=>{
         myTimer= setInterval(()=>{
          --inputNumber.value;
        if (inputNumber.value <=0) {
            clearInterval(myTimer);
        }
        },1000)  
});
    

stopBtn.addEventListener('click', ()=>{
    if (myTimer) {
        
        clearInterval(myTimer);
    }
});


resetBtn.addEventListener('click', ()=>{
    inputNumber.value = 0;
    clearInterval(myTimer);
});

