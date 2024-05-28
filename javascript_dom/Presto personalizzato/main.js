let navbar = document.querySelector('#navbar'); 
let links = document.querySelectorAll('.nav-link');
let logoNavbar = document.querySelector('#logoNavbar');
let sword = document.querySelector('#sword');
let check = false;
let collapse = document.querySelector('#collapse');

let confirm = true;



window.addEventListener('scroll',()=>{
    let scrolled = window.scrollY;
    if (scrolled > 0) {
        navbar.classList.remove('bg-green');
        navbar.classList.add('bg-red');
        collapse.classList.remove('bg-green');
        collapse.classList.add('bg-red');
        navbar.style.height = '70px';
        links.forEach((link)=>{
            link.style.color = 'var(--green)'
        });
        sword.src = './media/sword-g.png';

    }else{
        navbar.classList.add('bg-green');
        navbar.classList.remove('bg-red');
        collapse.classList.add('bg-green');
        collapse.classList.remove('bg-red');
        navbar.style.height = '140px';
        links.forEach((link)=>{
            link.style.color = 'var(--red)'
        });
        sword.src = './media/sword-o.png';
        

    }


});

sword.addEventListener('click', ()=>{
    if (check == false) {
        sword.style.transform = 'rotate(+90deg)'
        check = true
        
    }else{
        sword.style.transform = 'rotate(0deg)'
        check = false
    }
});

let firstNumber = document.querySelector('#firstNumber');
let secondNumber = document.querySelector('#secondNumber');
let thirdNumber = document.querySelector('#thirdNumber')

function createInterval(n, element, time){
    let counter = 0;
    let interval = setInterval(()=>{
        if (counter < n) {
        counter++
        element.innerHTML = counter
    }else   
        clearInterval(interval);
    },time);

    setTimeout(() => {
        confirm = true;
    }, 8000);
}


let observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{

        if (entry.isIntersecting && confirm) {
            createInterval(100, firstNumber, 100);
            createInterval(200, secondNumber,50);
            createInterval(300, thirdNumber, 20);
            confirm = false;
        }
    })
});

observer.observe(firstNumber);

let reviews = [
    {user: 'Whis', description: `Il più bel sito di annunci`, rank: 5},
    {user: 'Goku', description: `Veramente non mi fà niente`, rank: 1},
    {user: 'Vegeta', description: `Mi piace tranne per dragon ball `, rank: 3},
    {user: 'Beerus', description: `Naruto è meglio `, rank: 2},
]

let swiperWrapper = document.querySelector('.swiper-wrapper');

reviews.forEach((recensione)=>{
    let div = document.createElement('div');
    div.classList.add('swiper-slide');
    div.innerHTML = ` 
    <div class="card-review">
        <p class="lead text-center">${recensione.description}</p>
        <p class="h4 text-center">${recensione.user}</p>
        <div class="d-flex justify-content-center star">
            
        </div>
    </div>
    `;

    swiperWrapper.appendChild(div);
});

let stars = document.querySelectorAll('.star');




stars.forEach((star, index)=>{
    for (let i = 1; i <= reviews[index].rank ; i++) {
        let icon = document.createElement('i');
        icon.classList.add('fa-solid','fa-star');
        star.appendChild(icon);
    }

    let difference = 5 - reviews[index].rank;
    for (let i = 1; i <= difference ; i++) {
        let icon = document.createElement('i');
        icon.classList.add('fa-regular','fa-star');
        star.appendChild(icon);
    }
});

// Swiper
const swiper = new Swiper('.swiper', {
    // Optional parameters
    effect: "flip",
    grabCursor: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: false,
  
  
    
  
});