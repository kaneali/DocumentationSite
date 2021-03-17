const humberger = document.querySelector('.humberger');
const nav = document.querySelector('.menu-bar');
const close = document.querySelector('#close');



// const move = document.querySelector('.slide');


document.addEventListener('DOMContententLoaded', () => {
    const cards = document.querySelectorAll('pre');
    cards.forEach((el) => {
        const card = el.classList.add('slide')
    })

    if (document.body.offsetHeight + window.innerHeight >= document.body.offsetHeight ) {
        card.style.transform = 'translate-y(-1000px)'

        document.body.style.background = 'blue'

}


    
})

humberger.addEventListener('click', () => {
    nav.style.transform = 'translate-x(500px)';
    nav.style.transition = '0.3s ease-out';
    nav.style.display = 'block';
    humberger.style.display = 'none';
})

close.addEventListener('click', () => {
    nav.style.display = 'none';
    humberger.style.display = 'block';

})
