/* ------------------------------- Menú modal ------------------------------- */

const menuBtn = document.getElementById('menu__btn');
const menuModal = document.querySelector('.menu__modal');
const closeBtn = document.querySelector('.close__btn');

menuBtn.addEventListener('click', function() {
    menuModal.classList.add('show');
});

closeBtn.addEventListener('click', function() {
    menuModal.classList.remove('show');
});
