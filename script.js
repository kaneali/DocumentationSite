const humberger = document.querySelector('.humberger');
const nav = document.querySelector('.menu-bar');
const close = document.querySelector('#close');

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


// Form toggle
const openForm = document.getElementById('open-form')
const modal = document.getElementById('form-container')
const closeForm = document.querySelector('.close')


document.addEventListener('DOMContentLoaded', () => {

    openForm.addEventListener('click', () => {
        modal.classList.add('show');
    });
    
    closeForm.addEventListener('click', () => {
        modal.remove('show');
    })
})

