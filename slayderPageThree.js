
const btnDetails = document.querySelector('.claendar__btn');// Кнопка подробнее

const btnDetailsClose = document.querySelector('.close');// Закрыть слайдер

const slayderContainer = document.querySelector('.page-three__wrapper-slayder');// Контейнер слайдера

const backgroundDark = document.querySelector('.black');// Тёмный фон

const btnPrev = document.querySelector('.prev');// Кнопка Prev слайд

const btnNext = document.querySelector('.next');// Кнопка Next слайд

const pageSlayder = document.querySelectorAll('.slayderPage');// Слайд

const pageSlayderPagination = document.querySelectorAll('.pagination');// Слайд


btnDetails.addEventListener('touchend', (e)=>{
    backgroundDark.style.display = 'block';
    slayderContainer.style.display = 'block';
    ScrollingPermission = false;
})
btnDetailsClose.addEventListener('touchend', (e)=>{
    backgroundDark.style.display = 'none';
    slayderContainer.style.display = 'none';
    ScrollingPermission = true;
})

btnNext.addEventListener('touchend', (e)=>{
    pageSlayder[0].classList.remove('slayderPage_active');
    pageSlayder[1].classList.add('slayderPage_active');
    pageSlayderPagination[0].classList.remove('active-pagination');
    pageSlayderPagination[1].classList.add('active-pagination');
})


btnPrev.addEventListener('touchend', (e)=>{
    pageSlayder[1].classList.remove('slayderPage_active');
    pageSlayder[0].classList.add('slayderPage_active');
    pageSlayderPagination[1].classList.remove('active-pagination');
    pageSlayderPagination[0].classList.add('active-pagination');
})