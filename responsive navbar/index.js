const navSlide = () => {
    const burger = document.querySelector('.burger')
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelector('.nav-links li') //togglr nav


    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    });

    //animate links
    // navLinks.forEach((link, index) => {
        
    //     link.style.animation = 'navLinkfade 0.5s ease forwards $(index / 7 + 0.3)s';
        
    // }) 
}

navSlide();

