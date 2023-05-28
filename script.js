const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const display = document.querySelector('.images');
console.log(display)
let num = 1;

nextBtn.addEventListener('click', nexDisplay);
prevBtn.addEventListener('click', preDisplay);

function nexDisplay() {
    display.animate([{opacity:'0.1'}, {opacity:'1.0'}]
    ,{duration: 1000,fill:'forwards'})
    num++;
    if(num >= 5) {
        num = 1;
    }
    console.log(num)
    display.style.background = `url(./images/image${num}.jpg)center/cover no-repeat`;

    
    
}

function preDisplay() {
    display.animate([{opacity:'0.1'}, {opacity:'1.0'}]
    ,{duration: 1000,fill:'forwards'})
    num--;
    
    if(num < 1) {
        num = 5;
    }
    console.log(num)
    display.style.background = `url(./images/image${num}.jpg)center/cover no-repeat`;

    
}