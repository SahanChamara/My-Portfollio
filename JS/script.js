//toggle icon
let menuIcon = document.querySelector('#mIcon');
let navBar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navBar.classList.toggle('active');
};



// Scroll sections active
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header navbar a');

window.onscroll = () => {
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header navbar a[href*= '+ id +']').classList.add('active');
            });
        };
    });
    // remove toggle icon and navbar when click nav bar link
    menuIcon.classList.remove('bx-x');
    navBar.classList.remove('active');
};



 
