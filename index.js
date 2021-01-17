function createNav(){
    let previous = '';
    let current = 'home';

    changePage();
    changeNavItem();

    let navItem = document.querySelectorAll('.nav');
    for (let i=0; i < navItem.length; i++){
        navItem[i].addEventListener('click', function(event){
            event.preventDefault();

            let next = event.target.getAttribute('href');
            push (next);
        });
        function push(next) {
            previous = current;
            current = next;

            changePage();
            changeNavItem();
        }
    }

    function changePage(){
        if (previous) {
            let previousPage = document.querySelector('.page__'+ previous);
            previousPage.classList.remove('page--active');
        } 

        let currentPage = document.querySelector('.page__' + current);
        currentPage.classList.add('page--active');
    }
     
    function changeNavItem(){
        if (previous) {
            let previousNavItem = document.querySelector('[href="'+ previous +'"]');
            previousNavItem.classList.remove('nav--active');
        }

        let currentNavItem = document.querySelector('[href="'+ current +'"]');
        currentNavItem.classList.add('nav--active');
    }

}

createNav();

let menu = document.querySelector('.menu');
let bar = document.querySelector('.sideBar');
let optionBox = document.querySelector('.optionBox');

let showOptions = function (){
    bar.addEventListener('click', function(){
        optionBox.classList.toggle('optionBox--invisible');
        menu.classList.toggle('menu--effect');
    })
}

showOptions();

let option = document.querySelectorAll('.option');

let changeSideBar = function(){
    for (let i = 0; i < option.length; i++){
        option[i].addEventListener('click', function(){
            optionBox.classList.add('optionBox--invisible');
            menu.classList.remove('menu--effect');
        })
    }
}

changeSideBar();
