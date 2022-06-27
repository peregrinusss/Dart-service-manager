// MENU BURGER

const burgerMenu = document.querySelector('.menu__burger');
const menuHeader = document.querySelector('.header__menu');
if (burgerMenu) {
    burgerMenu.addEventListener('click', function (e) {
        window.scrollTo(0,0);
        document.body.classList.toggle('_lock');
        burgerMenu.classList.toggle('_active');
        menuHeader.classList.toggle('_active');
    })
}


// Scroll to section

const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener('click', function (e) {
            const menuLink = e.target;
            if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
                const gotoBlock = document.querySelector(menuLink.dataset.goto);
                const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset;

                if (burgerMenu.classList.contains('_active')) {
                    document.body.classList.remove('_lock');
                    burgerMenu.classList.remove('_active');
                    menuHeader.classList.remove('_active');
                }
                
                window.scrollTo({
                    top: gotoBlockValue,
                    behavior: "smooth",
                })
                e.preventDefault();
            }
        })
    })
}

const navLinks = document.querySelectorAll('.nav__link[data-goto]');
if (navLinks.length > 0) {
    navLinks.forEach(navLink => {
        navLink.addEventListener('click', function (e) {
            const navLink = e.target;
            if (navLink.dataset.goto && document.querySelector(navLink.dataset.goto)) {
                const gotoBlock = document.querySelector(navLink.dataset.goto);
                const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset;

                window.scrollTo({
                    top: gotoBlockValue,
                    behavior: "smooth",
                })
                e.preventDefault();
            }
        })
    })
}


// Accordion (service section)

const accordionItems = document.querySelectorAll(".service__name")
accordionItems.forEach(accordionItem => {
    const accordionArrow = accordionItem.lastElementChild;
    accordionItem.addEventListener("click", event => {
        accordionItem.classList.toggle("_active");
        accordionArrow.classList.toggle("_active");
        const accordionItemBody = accordionItem.nextElementSibling;
        if (accordionItem.classList.contains("_active")) {
            accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
        }
        else {
            accordionItemBody.style.maxHeight = 0;
        }
    })
})
