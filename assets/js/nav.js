const menu = document.getElementById('nav-ul');
const hamburger = document.querySelector('.hamburger');
const menuLinks = document.querySelectorAll('#nav-ul a');

function toggleMenu() {
    const isActive = menu.classList.contains('active');

    if (isActive) {
        closeMenu();
    } else {
        menu.classList.add('active');
        menu.style.animation = 'slideInRight 0.3s forwards';
        hamburger.classList.add('open');
    }
}

function closeMenu() {
    menu.style.animation = 'slideOutRight 0.3s forwards';
    hamburger.classList.remove('open');

    menu.addEventListener('animationend', () => {
        menu.classList.remove('active');
        menu.style.animation = '';
    }, { once: true });
}

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (menu.classList.contains('active')) {
            closeMenu();
        }
    });
});


const headerTop = document.getElementById('header-top-section');
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
    header.classList.add('scrolled-up');
    } else {
    header.classList.remove('scrolled-up');
    }
});

