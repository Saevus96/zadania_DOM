/*
Zadanie:
-------------

Po kliknięciu w "dodaj element" do listy dodaj nowy element podobny do tego już istniejącego na liście
Po dodaniu powinien mieć kolejny numer który wylicz na podstawie ilości elementów + 1

Po kliknięciu w ikonę kosza usuń dany element
Po kliknięciu w ikonę klonowania sklonuj na koniec listy dany element

*/
document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.querySelector(".btn");
    const list = document.querySelector(".list");

    addButton.addEventListener('click', function (e) {
        const elemHTML = document.querySelector('#elementInner').innerHTML;
        const div = document.createElement('div');
        div.classList.add('element');
        div.innerHTML = elemHTML;

        const countElements = list.querySelectorAll('.element').length;
        div.querySelector('.nr').innerHTML = countElements + 1;
        list.appendChild(div);
    });

    list.addEventListener('click', function (e) {
        if (e.target.classList.contains("delete")) {
            e.target.parentElement.parentElement.removeChild(e.target.parentElement);
        }
        if (e.target.classList.contains("clone")) {
            const clone = e.target.parentElement.cloneNode(true);            
            list.appendChild(clone);
        }
    });

})