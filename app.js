

const sliderTrack = document.querySelector('.background');// обёртка заднего фона

const btnWhatNext = document.querySelector('.page-one__btn');// Кнопка на первой страницы что дальше?

const btnHome = document.querySelector('.menu__button-home-page__image');// Кнопка домик

let indexSlider = 1;//номер текущего слайда

let positionSlider = 0;//позиция слайдера в left: -0 PX 

let touchPosStart = null;// позиция косания экрана по оси Х   

let touchPosEnd = null;// Отпускает палец с экрана запускает функцию swipe() для переключения слайда 

let ScrollingPermission = true;// true - прокрутка общего слайдера разрешена false - запрещена 

const imgSperm = document.querySelectorAll('.sperm'); //Картинки головастиков 2 страница
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

    //Сменя слайда
    document.addEventListener('touchend', (e) => {
        if (touchPosEnd < touchPosStart - 200 && indexSlider < 3 && ScrollingPermission === true && touchPosEnd != null) {
            swipe(-1024, 1)
        } else if (touchPosEnd > touchPosStart + 200 && indexSlider > 1 && ScrollingPermission === true && touchPosEnd != null) {
            swipe(1024, -1)
        }
    });



    // ЧТО ДАЛЬШЕ
    btnWhatNext.addEventListener('touchend', (e) => ScrollingPermission && swipe(-1024, 1))


    // ДОМИК
    btnHome.addEventListener('touchend', (e) => {
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
    '<button class="page-two__btn"> Следующая страница ► </button>' )
    document.querySelector('.page-two__btn').addEventListener('click', (e) => ScrollingPermission && swipe(-1024, 1))
}


// анимация головастиков
const animationOn = (e) => {
    imgSperm.forEach((e) => {
        e.classList.add(`animationPageTwo`);
    })
}





