/*
Zadanie:
-------------

Przy wysyłce formularza dodaj do listy nowego użytkownika. Niech formularz nie przeładowuje strony.
Postaraj się nie podpinać zdarzenia click dla button:submit, a podpiąć się pod zdarzenie submit dla formularza.

Po kliknięciu na przycisk usuwania (kosz na śmieci) usuń danego użytkownika z listy
*/
document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector(".user-list");
    const form = document.querySelector(".form");   

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const nameVal = document.querySelector("#name").value;
        const numberVal = document.querySelector("#phone").value;
        console.log(nameVal, numberVal);

        const user = document.createElement("li");
        user.classList.add("user");

        const userData = document.createElement("div");
        userData.classList.add("user-data");

        const userName = document.createElement("div");
        userName.classList.add("user-name");
        userName.innerText = nameVal;

        const userPhone = document.createElement("div");
        userPhone.classList.add("user-phone");
        userPhone.innerText = numberVal;

        const button = document.createElement("button");
        button.classList.add("btn", "user-delete");
        button.setAttribute("type", "button");


        userData.appendChild(userName);
        userData.appendChild(userPhone);
        user.appendChild(userData);
        user.appendChild(button);
        container.appendChild(user);
        
    });


    container.addEventListener('click', function(e) {
        if (e.target.parentElement.parentElement.classList.contains('user-list') && e.target.classList.contains('user-delete')) {
            const li = e.target.parentElement;
            li.parentElement.removeChild(li);
        }
    });



});


