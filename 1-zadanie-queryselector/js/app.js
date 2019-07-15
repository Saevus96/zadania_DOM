//Rozwiązując kolejne punkty powinieneś z planszy usuwać kwadraty z danym numerem.
//Jeżeli dane kwadraty nie zostały usunięte, znaczy że polecenie nie zostało dobrze wykonane.

// 1. Znajdź elementy o klasie .first-attempt - dodaj im klasę active
// 2. Znajdź elementy z atrybutem data-border i dodaj im atrybut data-el-active. Wykorzystaj dataset i inny rodzaj pętli niż w 1 zadaniu
// 3. Znajdź elementy z klasą hack. Dodaj im atrybut title ustawiony na wartość "hacking". Ten atrybut nie ma mieć z przodu data-
// 4. Znajdź elementy o klasie hijack. Usuń im atrybut title
// 5. Znajdź elementy które mają 2 klasy równocześnie: st1 i st2. Dodaj im style: color: red, i font-size na 15px
// 6. Znajdź elementy które mają klasę .del ale nie mają klasy .hijack. Dodaj im atrybut data-hack-active, usuń atrybut data-hack-inactive
// 7. Znajdź elementy o klase .last-attempt i pokaż w ich wnętrzu spany


//1
const firstAttempt = document.querySelectorAll('.first-attempt');

[].forEach.call(firstAttempt, function (element) {
    element.classList.add('active');
});

//2 
const container = document.querySelector('.container');

const dataBorders = document.querySelectorAll('[data-border]');

for (let i = 0; i < dataBorders.length; i++) {
    dataBorders[i].dataset.elActive = "";
}

//3
const hack = document.querySelectorAll('.hack');

[].forEach.call(hack, function (element) {
    element.title = "hacking";
});

//4
const hijack = document.querySelectorAll(".hijack");

[].forEach.call(hijack, function (element) {
    element.removeAttribute("title");
});

//5
const st = document.querySelectorAll(".st1.st2");

[].forEach.call(st, function (element) {
    element.style.color = 'red';
    element.style.fontSize = '15px';
});

//6
const del = document.querySelectorAll(".del:not(.hijack)");

[].forEach.call(del, function (element) {
    element.dataset.hackActive = "";
    element.removeAttribute("data-hack-Inactive");
});

// 7. Znajdź elementy o klase .last-attempt i pokaż w ich wnętrzu spany

const lastAttempt = document.querySelectorAll(".last-attempt");

[].forEach.call(lastAttempt, function (element) {
   
    element.querySelector("span").style.display="none";
});