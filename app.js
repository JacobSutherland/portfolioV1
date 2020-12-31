const projectDescription = document.querySelectorAll('.projects-container p');
const projectCard = document.querySelectorAll('.project-img-description');
const header = document.querySelector('header')
const headerNav = document.querySelector('header nav')
const dropDownIcon = document.querySelector('.drop-down')
const closeIcon = document.querySelector('.close')
const menuItems = document.querySelectorAll('header nav a')

//Sets the description of projects to none and toggles them on and off based on mouseover and mouseout and screen size
function toggleDescriptions(){
    if(screen.width >= 960){
        console.log(screen.width)
        for(let i = 0; i < projectDescription.length; i++){
            projectDescription[i].style.display = 'none';
        }

        for(let i = 0; i < projectCard.length; i++){
            projectCard[i].addEventListener('mouseover', () => {
            let currentIndex = i;
            projectDescription[currentIndex].style.display = 'initial';
            })
        }

        for(let i = 0; i < projectCard.length; i++){
            projectCard[i].addEventListener('mouseout', () => {
            let currentIndex = i;
            projectDescription[currentIndex].style.display = 'none';
            })
        }
    }   
}

closeIcon.style.display = 'none';
dropDownIcon.addEventListener('click', () => {
    headerNav.classList.remove('hide-nav');
    closeIcon.style.display ='block';
})
closeIcon.addEventListener('click', () => {
    headerNav.classList.add('hide-nav')
})

function closeMenu() {
    for(let i = 0; i < menuItems.length; i++){
        menuItems[i].addEventListener('click', () => {
            headerNav.classList.add('hide-nav');
        })
    }
}

toggleDescriptions();
closeMenu();