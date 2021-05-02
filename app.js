

const sliderTrack = document.querySelector('.background');// обёртка заднего фона

const btnWhatNext = document.querySelector('.page-one__btn');// Кнопка на первой страницы что дальше?

const btnHome = document.querySelector('.menu__button-home-page__image');// Кнопка домик

let indexSlider = 1;//номер текущего слайда

let positionSlider = 0;//позиция слайдера в left: -0 PX 

let tuchPosStart = null;// позиция косания экрана по оси Х   

let tuchPosX = null;// Отпускает палец с экрана запускает функцию swipe() для переключения слайда 

let ScrollingPermission = true;// true - прокрутка общего слайдера разрешена false - запрещена 

const imgSperm = document.querySelectorAll('.sperm'); //Картинки головастиков 2 страница

let animationSperm = false; //Включает анимацию




// функция переключения слайда 
const swipe = () => {
    //Условие для переключения на следующий слайд 
    // 1 при движении пальца по экрану ~ 220 px
    // 2 если это не первый или последний слайд
    // 3 если слайд уже переключается
    // 4 если не просто клик по экрану 
    if (tuchPosX < tuchPosStart - 220 && indexSlider < 3 && ScrollingPermission === true && tuchPosX != null) {
        positionSlider = indexSlider * -1024;
        sliderTrack.style.left = `${positionSlider}px`;
        tuchPosX = null;
        tuchPosStart = null;
        indexSlider++;
        if(indexSlider===2){
            animationSperm=true;
            animationOn();
        }
        return indexSlider

    }
    else if (tuchPosX > tuchPosStart + 220 && indexSlider > 1 && ScrollingPermission === true && tuchPosX != null) {
        indexSlider--;
        positionSlider = indexSlider * -1024;
        sliderTrack.style.left = `${positionSlider + 1024}px`;
        tuchPosX = null;
        tuchPosStart = null;
        return indexSlider;
    } else {
        tuchPosX = null;
        tuchPosStart = null;
    }
}
//Определение координаты косания по оси Х 
document.addEventListener('touchstart', (e) => {
    tuchPosStart = e.touches[0].clientX;
    return tuchPosStart;
});
//Определение координаты поднятия пальца с экрана по оси Х 
document.addEventListener('touchmove', (e) => {
    tuchPosX = e.touches[0].clientX;
    return tuchPosX;
});
//выполнение функции при поднятии пальца от экрана
document.addEventListener('touchend', (e) => swipe());

// Отключает повторение смены слайдов пока не закончится анимация слайдера
sliderTrack.addEventListener('transitionstart', (e) => {
    ScrollingPermission = false;
});

sliderTrack.addEventListener('transitionend', (e) => {
    ScrollingPermission = true;
});
// кнопка ЧТО ДАЛЬШЕ отправляет на вторую страницу 
btnWhatNext.addEventListener('touchend', (e) => {
    positionSlider = indexSlider * -1024;
    sliderTrack.style.left = `${positionSlider}px`;
    tuchPosX = null;
    tuchPosStart = null;
    indexSlider++;
    animationSperm=true;
    animationOn();
    return indexSlider;
})
// слушатель домик возвращает на первую страницу сбрасывает анимацию на второй страницы,
btnHome.addEventListener('touchend', (e) => {
    indexSlider=1;
    sliderTrack.style.left = `0px`;
    tuchPosX = null;
    tuchPosStart = null;
    animationSperm= false;
    imgSperm.forEach((e)=>{
        e.classList.remove(`spermA`);
    })
})

// анимация головастиков

const animationOn = ()=>{
    if(animationSperm === true)
        imgSperm.forEach((e)=>{
            e.classList.add(`spermA`);
        })
}


// ползунок 2 страница

const scrollBar = document.querySelector('.scrollBar');
const itemScroll = document.querySelector('.text-content');


window.addEventListener('load', ()=>{
    scrollBar.min = 0
    scrollBar.max = 290
})
scrollBar.addEventListener('touchmove', (e)=>{
    itemScroll.style.top =`-${Number(scrollBar.value)}px`
})
scrollBar.addEventListener('touchend', (e)=>{
    itemScroll.style.top =`-${Number(scrollBar.value)}px`
})


 

