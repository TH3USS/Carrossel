let nextButton = document.getElementById('next');
let prevButton = document.getElementById('prev');
let backButton = document.getElementById('back');
let seeMoreButtons = document.querySelectorAll('.seeMore');
let carrossel = document.querySelector('.carrossel');
let listHTML = document.querySelector('.carrossel .list');

nextButton.onclick = function(){
    showSlider('next');
}
prevButton.onclick =function(){
    showSlider('prev');
}
const showSlider = (type) => {
    let items = document.querySelectorAll('.carrossel .list .item');
    if(type === 'next'){
        listHTML.appendChild(items[0]);
        carrossel.classList.add('next')
    }
}