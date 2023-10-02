const mobileNav = () => {
    const headerBtn = document.querySelector('.header__bars');
    const mobileNav = document.querySelector('.mobile-nav');
    const mobileLinks = document.querySelectorAll('.mobile-nav__link');
    // State
    let isMobileNavOpen = false;

    headerBtn.addEventListener('click', () => {
        isMobileNavOpen = !isMobileNavOpen;
        if (isMobileNavOpen) {
        mobileNav.style.opacity = '1';
        mobileNav.style.visibility = 'visible';
        document.body.style.overflowY = 'hidden';
        } else {
        mobileNav.style.opacity = '0';
        mobileNav.style.visibility = 'hidden';
        document.body.style.overflowY = 'auto';
        }
    });

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
        isMobileNavOpen = false;
        mobileNav.style.opacity = '0';
        mobileNav.style.visibility = 'hidden';
        document.body.style.overflowY = 'auto';
        });
    });
};

    export default mobileNav;
