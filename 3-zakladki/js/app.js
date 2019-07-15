/*
Zadanie:
-------------

Po kliknięciu w link w zakładkach:
- przełącz aktywną zakładkę (zmieniając klasę tab-el-active)
- pokaż treść zakładki na którą kieruje dany link, ukryj pozostałe treści
*/
document.addEventListener('DOMContentLoaded', function () {
    const li = document.querySelectorAll('.tab-el');
    const div = document.querySelectorAll('.tab-content');

    for (el of li) {
        el.addEventListener('click', function (e) {
            e.preventDefault();
            for (el2 of li) {
                el2.classList.remove("tab-el-active");
            }
            this.classList.add("tab-el-active");
            let item = this.firstElementChild.innerText;
            for (let i = 0; i < div.length; i++) {
                div[i].classList.remove("tab-content-active");
            }
            if (item === "javascript".toUpperCase()) {
                div[0].classList.add("tab-content-active");
            }
            if (item === "python".toUpperCase()) {
                div[1].classList.add("tab-content-active");
            }
            if (item === "turbo pascal".toUpperCase()) {
                div[2].classList.add("tab-content-active");
            }
        })
    }
});