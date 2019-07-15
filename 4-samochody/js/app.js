/*
Zadanie:
-------------
po kliknięciu na przycisk przy przy samochodzie:
- pokaż element .car-detail dla danego samochodu.
- zmień tekst na przycisku na "schowaj detale".
- dodaj klasę .car-show-detail do danego samochodu - elementu .car

Po ponownym kliknięciu na przycisk
- Przywróć początkowy tekst na przycisku (pokaż detale)
- schowaj .car-detail danego samochodu
- usuń klasę .car-show-detail z danego samochodu
*/
document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll(".car-toggle-detail");

    buttons.forEach(el => {
        el.addEventListener('click', function (e) {
            e.preventDefault();
            const parent = this.parentElement.parentElement.parentElement.parentElement;
            if (!this.hasAttribute("opened")) {
                this.setAttribute("opened", "");
                this.innerText = "schowaj detale";

                parent.classList.add("car-show-detail");
                parent.querySelector(".car-detail").style.display = 'block';
            }
            else {
                this.removeAttribute("opened");
                this.innerText = "pokaż detale";
                parent.classList.remove("car-show-detail");
                parent.querySelector(".car-detail").style.display = 'none';

            }
        });

    });
});
