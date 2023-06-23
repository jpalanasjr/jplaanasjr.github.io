window.addEventListener('scroll',() => {
    document.querySelector('nav').classList.toggle('window-scrolled', window.scrollY > 0);
});


const header__frame = document.querySelector('.header__frame');

header__frame.addEventListener('click', function() {
    header__frame.classList.toggle('fullscreen');
});

