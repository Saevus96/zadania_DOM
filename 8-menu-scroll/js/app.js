/*
Po kliknięciu na A przełącz klasę .nav-li-active z obecnie zaznaczonego elementu na kliknięty element.
Po kliknięciu na A przewiń stronę do odpowiedniego elementu na który wskazuje link
Zwróć uwagę że klasa .nav-li-active jest nadawana na element LI a nie na A.

Dla przewinięcia skorzystaj z:
https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView

Jak pobrać element na który wskazuje link?
Wystarczy pobrać atrybut href linka i wykorzystać go w querySelector.
Dla przykładu gdy link ma <a href="#section1"></a> to by pobrać element na który wskazuje link
trzeba użyć instrukcji document.querySelector("#section1").
*/

document.addEventListener('DOMContentLoaded', function () {
    const li = document.querySelectorAll(".nav-el");

    li.forEach(element => {
        element.addEventListener('click', function (e) {
            e.preventDefault();
            for (el of li) {
                el.classList.remove("nav-el-active");
            }
            this.classList.add("nav-el-active");

            const href = this.firstChild.nextElementSibling.getAttribute("href");
            console.log(href);

            const block = document.querySelector(href);
            block.scrollIntoView({
                behavior: "auto",
                block: "start",
                inline: "start"
            });
        });
    });
});