
const btnDetails = document.querySelector('.claendar__btn');// Кнопка подробнее

const btnDetailsClose = document.querySelector('.close');// Закрыть слайдер

const slaiderContainer = document.querySelector('.page-three__wrapper-slayder');// Контейнер слайдера

const backgroundDark = document.querySelector('.black');// Тёмный фон

const btnPrev = document.querySelector('.prev');// Кнопка Prev слайд

const btnNext = document.querySelector('.next');// Кнопка Next слайд

const pageSlayder = document.querySelectorAll('.slayderPage');// Слайд

const pageSlayderPagination = document.querySelectorAll('.pagination');// Слайд

// Открыть закрыть модальное окно
modalWindow = (openOrClose, scroll) =>{
    backgroundDark.style.display = openOrClose;
    slaiderContainer.style.display = openOrClose;
    ScrollingPermission = scroll;
} 
btnDetails.addEventListener('touchend', (e)=>{
    modalWindow('block', false)
})
btnDetailsClose.addEventListener('touchend', (e)=>{
    modalWindow('none', true)
})

slaidPagination = (openPage, closePage) =>{
    pageSlayder[closePage].classList.toggle('slayderPage_active');
    pageSlayder[openPage].classList.toggle('slayderPage_active');
    pageSlayderPagination[closePage].classList.toggle('active-pagination');
    pageSlayderPagination[openPage].classList.toggle('active-pagination');
}
btnNext.addEventListener('touchend', ()=>{
    slaidPagination(0, 1)
})
btnPrev.addEventListener('touchend', ()=>{
    slaidPagination(1, 0)
})