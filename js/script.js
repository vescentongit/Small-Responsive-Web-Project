const navbarNav = document.querySelector('.navbar-nav');

// hamburger clicking
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

//click outside sidebar to remove sidebar
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click',function(e){
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }
}
)