const menu = document.querySelector('#mobile-menu')
const menulinks = document.querySelector('.navbar_menu')
const navlogo = document.querySelector('#navbar_logo')

//display mobile menu
const mobilemenu = () => {
    menu.classList.toggle('is-active');
    menulinks.classList.toggle('active');
}

menu.addEventListener('click', mobilemenu);

//show active menu when scrolling

const highlightMenu = () => {
    const elem = document.querySelector('.highlight')
    const homeMenu = document.querySelector('#home-page')
    const aboutMenu = document.querySelector('#about-page')
    const servicesMenu = document.querySelector('#services-page')
    let scrollpos = window.scrollY


// adds 'highlight' class to my menu items

if (window.innerwidth > 960 && scrollpos < 600){
    homeMenu.classList.add('highlight')
    aboutMenu.classList.remove('highlight')
    return
}else if (window.innerwidth > 960 && scrollpos < 1400){

    aboutMenu.classList.add('highlight')
    homeMenu.classList.remove('highlight')
    servicesMenuMenu.classList.remove('highlight')
    return

    }else if (window.innerwidth > 960 && scrollpos < 2345){

        servicesMenuMenu.classList.add('highlight')
        homeMenu.classList.remove('highlight')
      return
    }
    
    if ((elem && window.innerwidth < 960 && scrollpos < 600)|| elem){
        elem.classList.remove('highlight')
    }


}

window.addEventListener('scroll', highlightMenu)
window.addEventListener('click', highlightMenu)


// close mobile menu

const hidemobilemenu = () => {
    const menuBars = document.querySelector('.is-active')
    if(window.innerWidth<=768 && menuBars){
        menuBars.classList.toggle('is-active')
        menulinks.classList.remove('active')
    }
}

menulinks.addEventListener('click', hidemobilemenu);
navlogo.addEventListener('click', hidemobilemenu)