// sslider
let mainSlider = document.querySelector('.main-slider');
let inputRadio = document.querySelector('.main-slider-inputs').children;
let mainSliderItems = document.querySelectorAll('[name="one"]');

for(let i of inputRadio){
    i.addEventListener('click', (event) =>{
        if(event.target.value == 1){
            mainSliderItems[0].setAttribute('checked', '');
            mainSlider.style.backgroundPosition = 'right, 10000px, 10000px, 10000px';

        }
        if(event.target.value == 2){
            mainSliderItems[1].setAttribute('checked', '');
            mainSlider.style.backgroundPosition = '-10000px, right, 10000px, 10000px';

        }
        if(event.target.value == 3){
            mainSliderItems[2].setAttribute('checked', '');
            mainSlider.style.backgroundPosition = '-10000px, -10000px, right, 10000px';

        }
        if(event.target.value == 4){
            mainSliderItems[3].setAttribute('checked', '');
            mainSlider.style.backgroundPosition = '-10000px, -10000px, -10000px, right';

        }   
    })  
}
function changeSlide(){
    for (let i = 0; i < mainSliderItems.length; i++){
        if(mainSliderItems[i].checked){
            if(mainSliderItems[i].value < mainSliderItems.length){
                if(mainSliderItems[i].value == 1){
                    mainSlider.style.backgroundPosition = '-10000px, right, 10000px, 10000px';
                    mainSliderItems[i].removeAttribute('checked');
                    mainSliderItems[i + 1].setAttribute('checked', '');

                    return;
                }
                if(mainSliderItems[i].value == 2){
                    mainSlider.style.backgroundPosition = '-10000px, -10000px, right, 10000px';
                    mainSliderItems[i].removeAttribute('checked');
                    mainSliderItems[i + 1].setAttribute('checked', '');

                    return;
                }
                if(mainSliderItems[i].value == 3){
                    mainSlider.style.backgroundPosition = '-10000px, -10000px, -10000px, right';
                    mainSliderItems[i].removeAttribute('checked');
                    mainSliderItems[i + 1].setAttribute('checked', '');

                    return;
                }
            }
            else{
                mainSlider.style.backgroundPosition = 'right, 10000px, 10000px, 10000px';
                mainSliderItems[i].removeAttribute('checked');
                mainSliderItems[0].setAttribute('checked', '');
                return;
            }
        }
    }
}
setInterval(()=>{changeSlide()}, 2000)
// map
let map = document.querySelector('#map');
let mapList = document.querySelector('#map-list');
mapList.addEventListener('click', (event)=>{
    map.setAttribute('src', event.target.closest('li').getAttribute('data-src'));
    console.log(event.target.closest('li').getAttribute('data-src'))
})
// cancel #
const anchors = document.querySelectorAll('a[href*="#"]');
for(let anchor of anchors){
    anchor.addEventListener('click', (event) =>{
        event.preventDefault();
        const blockID = anchor.getAttribute('href');
        document.querySelector('' + blockID).scrollIntoView({
            behavior:"smooth",
            block:'start',
        })
    })
}
// cards
let catalogDoor = []
for(let i=1; i < 1000; i++){
    let arr = [];
    arr.push('Etadoor' + i);
    
    let randomValueOne = Math.floor(Math.random() * (100000 - 1) + 1);
    arr.push(randomValueOne);

    let randomValuetwo = Math.floor(Math.random() * (3 - 1) + 1);
    let nal = '';
    if(randomValuetwo == 1){
        nal = 'В наличии'
    }
    if(randomValuetwo == 2){
        nal = 'Отсутствует'
    } 

    arr.push(nal)

    let randomValueThree = Math.floor(Math.random() * (5 - 1) + 1);
    let mat = '';
    if(randomValueThree == 1){
        mat = 'Дерево'
    }
    if(randomValueThree == 2){
        mat = 'Пластик'
    } 
    if(randomValueThree == 3){
        mat = 'Метал'
    } 
    if(randomValueThree == 4){
        mat = 'Cтекло'
    } 
    arr.push(mat);

    let randomValueFour = Math.floor(Math.random() * (100000 - 1) + 1);
    model = 'RALL' + randomValueFour;
    arr.push(model)
    catalogDoor.push(arr)
}
function newLineCard(){
    for(let i = 0; i < 4; i++){   
   let item = catalogDoor[0];
   let mainContainer =  document.createElement('div');
   mainContainer.classList.add('catalog-cards-card');

   let secondContainer = document.createElement('div')
   secondContainer.classList.add('catalog-cards-card-container');

   let img = document.createElement('img');
   img.setAttribute('src', './img/door-1.jpg');

   let h3 = document.createElement('h3');
   h3.textContent = 'Влагостойкая двери ' + item[0] + ' Цвет ' + item[4] + ' двустворчатая';

   let catalogCardsCcardContainerInfo = document.createElement('div');
   catalogCardsCcardContainerInfo.classList.add('catalog-cards-card-container-info');

   for(let i = 0; i < 5; i++){
    let div = document.createElement('div');
    catalogCardsCcardContainerInfo.appendChild(div)
   }
   catalogCardsCcardContainerInfo.children[0].innerHTML = '<span>Модель:</span><span>' + item[0] + '</span>';
   catalogCardsCcardContainerInfo.children[1].innerHTML = '<span>Артикул:</span><span>' + item[1] + '</span>';
   catalogCardsCcardContainerInfo.children[2].innerHTML = '<span>Наличие:</span><span>' + item[2] + '</span>';
   catalogCardsCcardContainerInfo.children[3].innerHTML = '<span>Отделка:</span><span>' + item[3] + '</span>';
   catalogCardsCcardContainerInfo.children[4].innerHTML = '<span>Цвет:</span><span>' + item[4] + '</span>';

   let hr1 = document.createElement('hr');

   let cardPrice = document.createElement('div');
   cardPrice.classList.add('card-price');
   cardPrice.innerHTML = '<div><p>16 965 грн. <span></span></p><p>за полотно</p></div><hr><div><p>20 965 грн.<span></span></p><p>за комплект</p></div></div>';

   let a = document.createElement('a');
   a.textContent = 'Заказать';
   a.setAttribute('href', '#');

   secondContainer.appendChild(img);
   secondContainer.appendChild(h3);
   secondContainer.appendChild(catalogCardsCcardContainerInfo);
   secondContainer.appendChild(hr1);
   secondContainer.appendChild(cardPrice);
   secondContainer.appendChild(a);

   mainContainer.appendChild(secondContainer);
   let cardContainer = document.querySelector('.catalog-cards');
   cardContainer.appendChild(mainContainer);
   catalogDoor.shift();
}
}
newLineCard()

document.querySelector('#moreItemCatalog').addEventListener('click', (event) =>{
    event.preventDefault();
    newLineCard()
})

// door-price
let calculPrice = document.querySelectorAll('.calcul-price');
for(let item of calculPrice){
item.addEventListener('change', (event)=>{
    let doorChoose = document.querySelector('#door-price-calculeted');
    let sum1 = 0;
    for(let i of doorChoose.children){
        if(i.matches('select')){
            sum1 += +i.value
        }
    }
    for(let i of doorChoose.children){
        if(i.matches('input')){
            sum1 = sum1 * Number(i.value)
        }
    }
    let sum2;
    let doorColor = document.querySelector('.send-form-radio-form-radio-one');
    for(let i of doorColor.children){
        for(let u of i.children){
            if(u.checked){
                sum2 = u.getAttribute('data-color-price')
            }

        }
    }
    let sum3;
    let doorSize = document.querySelector('.send-form-radio-form-radio-two');
    for(let i of doorSize.children){
        for(let u of i.children){
            if(u.checked){
                sum3 = u.getAttribute('data-size-price')
            }

        }
    }
   if(event.target.parentElement.classList.contains('send-form-select')){
        if(event.target.matches('select')){
            let delItem = event.target.closest('select').children 
            for(let i of delItem){
                if(i.hasAttribute('data-del')){
                    i.remove()
                }
            }
        }
        if(document.querySelector('#door-amount').value < 1){
            document.querySelector('#door-amount').value = 1
        }        
   } 
   let totalTriceWiev = document.querySelector('#wiev-total-price');
   if(Math.floor(sum1 * sum2 * sum3) > 5000){
    totalTriceWiev.textContent = Math.floor(sum1 * sum2 * sum3) + " грн"
   }
})
}

// cards-slider
let cardsCards = document.querySelector('.cards-cards');
let CardsArrRigth = [];
for(let i = 0; i <cardsCards.children.length; i++){
    CardsArrRigth.push(cardsCards.children[i]);
    cardsCards.children[i].style.right = (i + 1)*10 + 'px';
    cardsCards.children[0].style.transform = 'rotateY(0deg)';  
    cardsCards.children[0].style.left = '35%';  
}
let CardsArrLeft = []
let leftCards = document.querySelector('.cards-buttons-left');
let rigthCards = document.querySelector('.cards-buttons-rigth');

leftCards.addEventListener('click', ()=>{
    if(CardsArrRigth.length > 1){
        CardsArrLeft.push(CardsArrRigth.shift())
        for(let i = 0; i< CardsArrLeft.length; i++){
            CardsArrLeft[i].style.left = (i + 1)*10 + 'px';
            CardsArrLeft[i].style.right = '';
            CardsArrLeft[i].style.transform = 'rotateY(-89deg)';
        }
        for(let i = 0; i< CardsArrRigth.length; i++){
            CardsArrRigth[0].style.transform = 'rotateY(0deg)';  
            CardsArrRigth[0].style.left = '35%'; 
            CardsArrRigth[i].style.right = (i + 1)*10 + 'px';
        }

    }

    })
rigthCards.addEventListener('click', ()=>{
    if(CardsArrLeft.length > 0){
        CardsArrRigth.unshift(CardsArrLeft.pop())
        for(let i = 0; i< CardsArrLeft.length; i++){
            CardsArrLeft[i].style.left = (i + 1)*10 + 'px';
            CardsArrLeft[i].style.right = '';
            CardsArrLeft[i].style.transform = 'rotateY(-89deg)';
        }
        for(let i = 0; i< CardsArrRigth.length; i++){
            CardsArrRigth[0].style.transform = 'rotateY(0deg)';  
            CardsArrRigth[0].style.right = '35%'; 
            CardsArrRigth[i].style.right = (i + 1)*10 + 'px';
            CardsArrRigth[i].style.left = '';
            CardsArrRigth[i].style.transform = 'rotateY(-89deg)';  
    
        }
    }
    })