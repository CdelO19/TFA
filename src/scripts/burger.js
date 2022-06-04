import gsap from 'gsap'

const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');

burger.addEventListener('click', ()=>{
    burger.classList.toggle('toggle');
    menu.classList.toggle('close');

    let close = document.querySelector('.close')

    if (close){
        
    }else{
        gsap.from('.menu', {
            x: 100,
            y: -100,
            opacity: 0,
            borderRadius: 400,
            duration: 2,
        });
    };
});