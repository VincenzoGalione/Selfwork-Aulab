let sword = document.querySelector('#sword');
let check1 = false;



sword.addEventListener('click', ()=>{
    if (check1 == false) {
        sword.style.transform = 'rotate(+90deg)'
        check1 = true
        
    }else{
        sword.style.transform = 'rotate(0deg)'
        check1 = false
    }
});




let opener = document.querySelector('.opener');
let circle = document.querySelector('.circle');

let characters = [
    {name : 'Goku', description : 'Il sayan più forte' , url:'./media/Goku.jpg'},
    {name : 'Vegeta', description : 'Il principe sayan ' , url:'./media/Vegeta-blue.jpg'},
    {name : 'Whis', description : 'Maestro di Beerus' , url:'./media/Whis.jpg'},
    {name : 'Beerus', description : 'Il dio della distruzione' , url:'./media/Beerus.jpg'},
];

characters.forEach((character)=>{
    let div = document.createElement('div');
    div.classList.add('moved');
    div.style.backgroundImage = `url(${character.url})`
    
    circle.appendChild(div);
    
});



let movedDivs = document.querySelectorAll('.moved');

let check = false;

let flipCard = document.querySelector('.flip-card');

let sfera = document.querySelector('#sfera');


let icon = document.querySelector('#icon');


opener.addEventListener('click', ()=>{
   if (check == false) {
    opener.style.transform = 'rotate(45deg)'
    movedDivs.forEach((moved, i)=>{
        let angle = (360 * i) / movedDivs.length;
        moved.style.transform = `rotate(${angle}deg) translate(150px) rotate(-${angle}deg)`
        sfera.style.backgroundColor = 'rgb(10,45,138)'
        icon.style.color = 'rgb(31,31,31)'


    });
    check = true
   }else {
    check = false
    opener.style.transform = 'rotate(0deg)'
    movedDivs.forEach((moved, i)=>{
        moved.style.transform = `rotate(0deg) translate(0px)`
        sfera.style.backgroundColor = 'rgb(252, 201, 35)'
        icon.style.color = 'rgb(229,1,5)';
 
    });
    flipCard.classList.add('d-none')
   }
});

let innerFace = document.querySelector('.innerFace');
let cardName = document.querySelector('#cardName');
let cardDescription = document.querySelector('#cardDescription');


movedDivs.forEach((moved, i)=>{
    moved.addEventListener('click', ()=>{
      let character = characters[i];
      innerFace.style.backgroundImage = `url(${character.url})`;
      cardName.innerHTML = character.name;
      cardDescription.innerHTML = character.description;
      flipCard.classList.remove('d-none')
    });
})