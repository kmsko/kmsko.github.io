"use strict"

const sliderTrack = document.querySelector('.background');// обёртка заднего фона

const btnWhatNext = document.querySelector('.page-one__btn');// Кнопка на первой страницы что дальше?

const btnHome = document.querySelector('.menu__button-home-page__image');// Кнопка домик

let indexSlider = 1;//номер текущего слайда

let positionSlider = 0;//позиция слайдера в left: -0 PX 

let touchPosStart = null;// позиция косания экрана по оси Х   

let touchPosEnd = null;// Отпускает палец с экрана запускает функцию swipe() для переключения слайда 

let ScrollingPermission = true;// true - прокрутка общего слайдера разрешена false - запрещена 

const imgSperm = document.querySelectorAll('.sperm'); //Картинки головастиков 2 страница

// 3 стр

const btnDetails = document.querySelector('.claendar__btn');// Кнопка подробнее

const btnDetailsClose = document.querySelector('.close');// Закрыть слайдер

const slaiderContainer = document.querySelector('.page-three__wrapper-slayder');// Контейнер слайдера

const backgroundDark = document.querySelector('.black');// Тёмный фон

const btnPrev = document.querySelector('.prev');// Кнопка Prev слайд

const btnNext = document.querySelector('.next');// Кнопка Next слайд

const pageSlayder = document.querySelectorAll('.slayderPage');// Слайд

const pageSlayderPagination = document.querySelectorAll('.pagination');// Слайд


// функция переключения слайда 

function swipe(whereTo, index) {

    indexSlider = indexSlider + (index)
    positionSlider = positionSlider + (whereTo)
    sliderTrack.style.left = `${positionSlider}px`;
}

// отключение повторной прокрутки
sliderTrack.addEventListener('transitionstart', (e) => {
    ScrollingPermission = false;
    touchPosEnd = null;
    touchPosStart = null;
});
sliderTrack.addEventListener('transitionend', (e) => {
    ScrollingPermission = true;
    if (indexSlider === 2) {
        animationOn();
    }
});

// 3 страница функции 
function modalWindow (openOrClose, scroll) {
    backgroundDark.style.display = openOrClose;
    slaiderContainer.style.display = openOrClose;
    ScrollingPermission = scroll;
};

function slaidPagination (openPage, closePage){
    pageSlayder[closePage].classList.toggle('slayderPage_active');
    pageSlayder[openPage].classList.toggle('slayderPage_active');
    pageSlayderPagination[closePage].classList.toggle('active-pagination');
    pageSlayderPagination[openPage].classList.toggle('active-pagination');
};



if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
    alert("вы зашли с телефона")
    //Определение координаты косания по оси Х 
    document.addEventListener('touchstart', (e) => {
        touchPosStart = e.touches[0].clientX;
    });

    //Определение координаты поднятия пальца с экрана по оси Х 
    document.addEventListener('touchmove', (e) => {
        touchPosEnd = e.touches[0].clientX;
    });

    //Смена слайда ПАЛЬЦЕМ
    document.addEventListener('touchend', (e) => {
        if (touchPosEnd < touchPosStart - 200 && indexSlider < 3 && ScrollingPermission === true && touchPosEnd != null) {
            swipe(-1024, 1)
        } else if (touchPosEnd > touchPosStart + 200 && indexSlider > 1 && ScrollingPermission === true && touchPosEnd != null) {
            swipe(1024, -1)
        }
    });



    // ЧТО ДАЛЬШЕ
    btnWhatNext.addEventListener('touchstart', (e) => ScrollingPermission && swipe(-1024, 1))


    // ДОМИК
    btnHome.addEventListener('touchstart', (e) => {
        indexSlider = 1;
        positionSlider = 0
        sliderTrack.style.left = `0px`;
        imgSperm.forEach((e) => {
            e.classList.remove(`animationPageTwo`);
        })
    })


    // ползунок 2 страница
    const scrollBar = document.querySelector('.scrollBar');
    const itemScroll = document.querySelector('.text-content');
    window.addEventListener('load', () => {
        scrollBar.min = 0
        scrollBar.max = 290
    })
    scrollBar.addEventListener('touchmove', (e) => {
        itemScroll.style.top = `-${scrollBar.value}px`
    })
    scrollBar.addEventListener('touchend', (e) => {
        itemScroll.style.top = `-${scrollBar.value}px`
    })
    // 3 стр Модальное окно
    // Открыть закрыть модальное окно

    btnDetails.addEventListener('touchstart', (e) => {
        modalWindow('block', false)
    })
    btnDetailsClose.addEventListener('touchstart', (e) => {
        modalWindow('none', true)
    })

    btnNext.addEventListener('touchstart', () => {
        slaidPagination(0, 1)
    })
    btnPrev.addEventListener('touchstart', () => {
        slaidPagination(1, 0)
    })
} else {
    alert("вы зашли с пк")
    // ДОМИК
    btnHome.addEventListener('click', (e) => {
        indexSlider = 1;
        positionSlider = 0
        sliderTrack.style.left = `0px`;
        imgSperm.forEach((e) => {
            e.classList.remove(`animationPageTwo`);
        })
    })

    // ЧТО ДАЛЬШЕ
    btnWhatNext.addEventListener('click', (e) => ScrollingPermission && swipe(-1024, 1))


    // СКРУЛЛ 2 стр
    const scrollBar = document.querySelector('.scrollBar');
    const itemScroll = document.querySelector('.text-content');
    window.addEventListener('load', () => {
        scrollBar.min = 0
        scrollBar.max = 290
    })
    scrollBar.addEventListener('mousemove', (e) => {
        itemScroll.style.top = `-${scrollBar.value}px`
    })
    scrollBar.addEventListener('mouseup', (e) => {
        itemScroll.style.top = `-${scrollBar.value}px`
    })

    // КНОПКА ЧТО ДАЛЬШЕ ВТОРАЯ СТРАНИЦА

    document.querySelector('.page-two').insertAdjacentHTML('afterbegin',
        '<button class="page-two__btn"> Следующая страница ► </button>')
    document.querySelector('.page-two__btn').addEventListener('click', (e) => ScrollingPermission && swipe(-1024, 1))

    // 3 стр Модальное окно
    // Открыть закрыть модальное окно

    btnDetails.addEventListener('click', (e) => {
        modalWindow('block', false)
    })
    btnDetailsClose.addEventListener('click', (e) => {
        modalWindow('none', true)
    })

    btnNext.addEventListener('click', () => {
        slaidPagination(0, 1)
    })
    btnPrev.addEventListener('click', () => {
        slaidPagination(1, 0)
    })
}


// анимация головастиков
const animationOn = (e) => {
    imgSperm.forEach((e) => {
        e.classList.add(`animationPageTwo`);
    })
}





