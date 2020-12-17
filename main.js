

document.querySelector(".menu-btn").addEventListener("click", () =>{
    document.querySelector(".nav-menu").classList.toggle("show");
});

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.new-cards', { delay:500});
ScrollReveal().reveal('.cards-banner-one', { delay:800});
ScrollReveal().reveal('.social', { delay:800});
ScrollReveal().reveal('.footer-links', { delay:800});