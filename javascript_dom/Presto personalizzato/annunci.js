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
    data.sort((a, b)=> a.price - b.price);

    let radioWrapper = document.querySelector('#radioWrapper');
    let cardWrapper = document.querySelector('#cardWrapper');

    // filtro per categoria
    function radioCreate(){
        let categories = data.map((annuncio)=> annuncio.category);

        let uniqueCategories = Array.from(new Set(categories))

        uniqueCategories.forEach((category)=>{
            let div = document.createElement('div');
            div.classList.add('form-check');
            div.innerHTML = ` 
            <input class="form-check-input" type="radio" name="categories" id="${category}">
            <label class="form-check-label" for="${category}">
            ${category}
            </label>
            `;
            radioWrapper.appendChild(div)
        })
    }
    radioCreate();


    function truncateWord(string){
        if(string.length > 15){
            return string.split(' ')[0] + '...';
        }else{
            return string;
        }
    }


    function showCards(array){
        cardWrapper.innerHTML = '';
        array.forEach((annuncio,i)=>{
            let div = document.createElement('div');
            div.classList.add('card-custom');
            div.innerHTML = `
                <img src= "https://picsum.photos/${400 + i}" alt="immagine casuale" class="img-fluid img-card"
                <p class="h2">${annuncio.category}</p>
                <p class="h4" title="${annuncio.name}">${truncateWord(annuncio.name)}</p>
                <p class="lead">${annuncio.price}€</p>
                <p class="lead">${annuncio.type}</p>
            `;
            cardWrapper.appendChild(div);
        });
    }
    showCards(data);


    let radioButtons = document.querySelectorAll('.form-check-input');
    function filterByCategory(array){
        let categoria = Array.from(radioButtons).find((button)=>button.checked).id

        if (categoria != 'All') {
            let filtered = array.filter((annuncio)=>annuncio.category == categoria);
            return filtered;
            
        }else{
            return array;
        }
    }


    radioButtons.forEach( (button)=>{
        button.addEventListener('click', ()=>{
            SetPriceInput();
            globalFilter();
        })
    });



    // filtro per prezzo
    let priceInput = document.querySelector('#priceInput');
    let priceValue = document.querySelector('#priceValue');

    function SetPriceInput(){
     let prices = filterByCategory(data).map((annuncio)=> +annuncio.price );   
     prices.sort((a, b)=> a - b);
     let maxPrice = Math.ceil(prices.pop());
     priceInput.max = maxPrice;
     priceInput.value = maxPrice;
     priceValue.innerHTML = maxPrice;
    }

    

    function filterByPrice(array){
        let filtered = array.filter((annuncio)=> +annuncio.price <= priceInput.value);
        return filtered; 
    }

    priceInput.addEventListener('input',()=>{
        priceValue.innerHTML = priceInput.value;
        globalFilter();
    });



    //  filtro per parola
    let wordInput = document.querySelector('#wordInput');
    function filterByWord(array){
        let filtered = array.filter((annuncio)=>annuncio.name.toLowerCase().includes(wordInput.value.toLowerCase()));
        return filtered;
    }

    wordInput.addEventListener('input', ()=>{
       globalFilter();
    });

    // filtro globale
    function globalFilter(){
        let filteredByCategory = filterByCategory(data);
        let filteredByPrice = filterByPrice(filteredByCategory);
        let filteredByWord = filterByWord(filteredByPrice);

        showCards(filteredByWord);

    }
});