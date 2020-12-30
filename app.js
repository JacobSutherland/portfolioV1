const projectDescription = document.querySelectorAll('.projects-container p');
const projectCard = document.querySelectorAll('.project-img-description');
const header = document.querySelector('header')
const dropDownIcon = document.querySelector('.drop-down')
const closeIcon = document.querySelector('.close')

closeIcon.classList.add('drop-down-closed')

function constructMenu(){
    let menu = `
    <div class='logo-nav-container'>
    <h1 class='logo'>Jacob Suther<span>land</span></h1>
    <nav class='heading-nav'>
        <a href='#home'>Home</a>
        <a href='#bio'>About</a>
        <a href='#projects'>My Work</a>
        <a href='#blogs'>Blogs</a>
        <a href="mailto:jacobsutherland224@gmail.com">Contact Me</a>
        <img class='drop-down' src='assets/dropDown.svg'>
        <img class='close' src='assets/close.svg'>
    </nav>
</div>
    `
    header.insertAdjacentHRML('beforeend', menu)
}

dropDownIcon.addEventListener('click', constructMenu)

//Sets the description of projects to none and toggles them on and off based on mouseover and mouseout
function toggleDescriptions(){
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

toggleDescriptions();
