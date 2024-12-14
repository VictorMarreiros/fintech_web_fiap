// elementos do menu
const sanduiche = document.querySelector('.sanduiche');
const headerMenu = document.querySelector('.header-menu');

// função de toggle
function toggleMenu(){
    sanduiche.classList.toggle('active');
    headerMenu.classList.toggle('active');
}

// função de click
sanduiche.addEventListener('click', toggleMenu);

headerMenu.addEventListener('click', (event) => {
    if(event.target.classList.contains('item-menu')) {
        toggleMenu();
    }
})
