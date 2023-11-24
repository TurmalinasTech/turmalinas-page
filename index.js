const menuIcon = document.querySelector('.menu-icon');
const navList = document.querySelector('nav ul');
const titulo = document.querySelector('.titulo');

menuIcon.addEventListener('click', () => {
    navList.classList.toggle('active');

    if (navList.classList.contains('active')) {
        navList.classList.remove('hidden');
        titulo.classList.add('hide');
    } else {
        navList.classList.add('hidden');
        setTimeout(() => {
            titulo.classList.remove('hide');
        }, 450); 
    }

    menuIcon.classList.toggle('active');
});