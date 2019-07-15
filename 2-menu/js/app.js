/*
Zadanie:
-------------

Po kliknięciu na LI przełącz klasę .nav-li-active z obecnie zaznaczonego elementu na element kliknięty.

Zwróć uwagę, że klasa .nav-li-active jest nadawana na element LI a nie na A. Postaraj się sprawić, by
podczas takiego kliku strona nie była przeładowywana.
*/

document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.nav-link');

    for (const el of links) {
        el.addEventListener('click', function (e) {
            e.preventDefault();

            const children = this.parentElement.parentElement.children;

            for (const child of children) {
                child.classList.remove('nav-el-active');
            }

            this.parentElement.classList.add('nav-el-active');
        });
    }
});