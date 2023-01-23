$(document).ready(function(){
    $('.cards_cards').slick({
        dots: true,
        centerMode: true,
        asNavFor:'.cards_cards_big'        

    })
    $('.cards_cards_big').slick({
        dots: true,
        asNavFor:'.cards_cards'        
    })
});


let openAllPopup = document.querySelectorAll('.openpopup');
for(let item of openAllPopup){
    item.addEventListener('click', (event) => {
        event.preventDefault();
        document.querySelector('.popup').classList.add('showpopup');
        let bodyPosition = window.scrollY;
        document.querySelector('.popup').dataset.position =  bodyPosition;
        
    } )
// const bodyScrollWidth = window.innerWidth - document.querySelector('.wraper').offsetWidth + 'px'; <!-- scroll size--!>

}
document.querySelector('#closepopup').addEventListener('click',  ( event) => {
    event.preventDefault();
    document.querySelector('#popup').classList.remove('showpopup');
    let position = document.querySelector('#popup').getAttribute('data-position');
    window.scrollTo({top: position})
})
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
document.querySelector('#popup').addEventListener('click' , event => {
    event.preventDefault();
    const blockID = document.querySelector('#popup').getAttribute('href');
    document.querySelector('' + blockID).scrollIntoView({
})})
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
//  coments
document.querySelector('#addComent').addEventListener('click', (event) =>{
    event.preventDefault();
    
    let nameComent = document.querySelector('#nameComent');
    let textComent = document.querySelector('#textComent');
    let listOfComents = document.querySelector('#listOfComents');
    if(nameComent.value.length > 0 && textComent.value.length> 0){

        let newLi = document.createElement('li');
        let firstSpan = document.createElement('span');
        firstSpan.textContent = nameComent.value;
        newLi.append(firstSpan);
        let secondSpan = document.createElement('span');
        secondSpan.textContent = ' --- ';
        newLi.append(secondSpan);
        let thirdSpan = document.createElement('span');
        thirdSpan.textContent = textComent.value;
        newLi.append(thirdSpan)
        listOfComents.prepend(newLi);
        nameComent.value = '';
        textComent.value = '';
    }
})

let tabsMainList = document.querySelector('.door-choice-nav').children;
for(let item of tabsMainList){
    item.addEventListener('click',  (event)=> {
        event.preventDefault()
        let numberOf = item.getAttribute('href').replace('#', '');
        let doorsImg = document.querySelectorAll('.door-choice-img');
        for(let doorimg of doorsImg){
            doorimg.style.display = 'none';
            if(doorimg.getAttribute('id') == numberOf){
                doorimg.style.display = 'flex';

            }
        }
    })

}
// up
document.querySelector('.up').addEventListener('click', ()=>{
    window.scrollTo({
        top: 0,
        behavior:"smooth"
    })
})
window.onscroll = function() {
    let posTop = window.pageYOffset;
    if(posTop > 200){
        document.querySelector('.up').style.display = 'block'
    }
    else{
        document.querySelector('.up').style.display = 'none'

    }
}