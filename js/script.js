// ----------------Sticky-Navbar-------------------
window.addEventListener('scroll', () => {
    document.querySelector('.header').classList.toggle('sticky', window.scrollY > 0)
})

// ------------Navbar-on-Small-Screen-----------
let menuBtn = document.querySelector('.menu-btn'),
    menuBtnIcon = document.querySelector('.menu-btn i'),
    navbarUl = document.querySelector('.navbar-ul'),
    navbarli = document.querySelectorAll('.navbar-li');

menuBtn.addEventListener('click', () => {
    menuBtnIcon.classList.toggle('fa-xmark')
    navbarUl.classList.toggle('active');

})
navbarli.forEach(li => {
    li.addEventListener('click', () => {
        navbarUl.classList.remove('active')
        menuBtnIcon.classList.remove('fa-xmark')
    })
})



// --------------Nav-Link-Active-State-on-Scroll-------------
let navLinks = document.querySelectorAll('.navbar-link');
function navlinkUpdate() {
    let position = window.scrollY + 200;
    navLinks.forEach(navlink => {
        let section = document.querySelector(navlink.hash)
        if (position >= section.offsetTop && position <= section.offsetTop + section.offsetHeight) {
            navlink.classList.add('active')
        } else {
            navlink.classList.remove('active')
        }

    })
}
window.addEventListener('load', navlinkUpdate)
document.addEventListener('scroll', navlinkUpdate)

// ----------------Navlink-Active-State-End------------------

// ---------------Heading-Animation---------------------

let Headings = document.querySelectorAll('h2');
function headingUpdate() {
    let headingPos = window.scrollY + 400;
    Headings.forEach(heading => {
        if (headingPos >= heading.offsetTop) {
            heading.classList.add('active')
        } else {
            heading.classList.remove('active')
        }
    })
}
window.addEventListener('load', headingUpdate)
document.addEventListener('scroll', headingUpdate)

// ---------------Heading-Animation-End---------------------

// ---------------Skills-Stats------------------------

let stats = document.querySelectorAll('.sub-bar')
function statsupdate() {
    let aboutOffset = document.getElementById('about').offsetTop;
    stats.forEach(stat => {
        if ((window.scrollY + 350) >= aboutOffset) {
            stat.classList.add('active')
        } else {
            stat.classList.remove('active')
        }
    })
}

window.addEventListener('load', statsupdate)
document.addEventListener('scroll', statsupdate)



// ---------------Skills-Stats-End--------------------

// ----------------Portfolio-Swiper-Slider-----------------
var swiper = new Swiper(".portfolio-slider", {
    slidesPerView: 2,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: { slidesPerView: 1 },
        1100: { slidesPerView: 2 }
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    }
});


// -----------------Testimonial-Swiper-Slider-----------------
var swiper = new Swiper(".testimonial-container", {
    slidesPerView: 2,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: { slidesPerView: 1 },
        1100: { slidesPerView: 2 }
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    }
});

// -----------------AOS-Initiate-------------
AOS.init({
    offset: 140,
    duration: 1000,
    once: true,
    mirror: false,
    easeing: "ease-in-out"
});
