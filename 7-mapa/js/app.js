/*
Zadanie:
-------------

w pliku html mamy mapę.
Dołączone są też 2 skrypty: cities.js i app.js
W tym pierwszym jest tablica z miastami - nie musisz go ruszać, ale przejrzeć powinieneś.

Naszym zadaniem jest:

1)
zrobienie pętli po tej tablicy
i wygenerowanie dla każdego elementu tablicy elementu:

<a
    href="http://www.poznan.pl/"
    class="map-marker"
    data-name="Poznań"
    data-population="542689"
    style="left: 180px; top: 270px;"
>Poznań</a>

Wykorzystaj tutaj dataset, classList, style itp.

Wygenerowany element wrzuć do mapy. Wszystkie dane potrzebne do wygenerowania takiego elementu są w tablicy.

2)
Wygenerowanie elementu i wrzucenie go do body:
<div class="map-tooltip" style="left: -9999px; top: -9999px"></div>


3)
Złapanie wygenerowanych wcześniej markerów (.map-marker)
Dla każdego takiego markera podepnijmy zdarzenia:
a) mouseover:
    - niech wypełnia tooltipa następującym html:
        <h2>Nazwa miasta</h2>
        <div>Population: <strong>Populacja miasta</strong></div>
    - niech ustawia go w pozycji kursora myszki (dodajć + 30 do x i y)
    - niech pokazuje tooltipa
b) mousemove:
    - niech ustawia tooltipa w pozycji kursora myszki (dodać + 30 do x i y)
c) mouseout:
    - niech czyści html tooltipa ("")
    - niech ukrywa toolip
*/
document.addEventListener('DOMContentLoaded', function () {

    const map = document.querySelector(".map");
    cities.forEach(el => {
        const a = document.createElement("a");
        a.classList.add("map-marker");
        a.href = el.href;
        a.dataset.name = el.name;
        a.dataset.population = el.population;
        a.style.left = el.map_x + "px";
        a.style.top = el.map_y + "px";
        a.innerText = el.name;
        map.appendChild(a);
    });

    const mapToolTip = document.createElement("div");
    mapToolTip.classList.add("map-tooltip");
    mapToolTip.style.left = "-9999px";
    mapToolTip.style.top = "-9999px";
    document.querySelector("body").appendChild(mapToolTip);

 const markers = document.querySelectorAll(".map-marker");

    for(marker of markers){
        
 marker.addEventListener('mouseover', function(e){
    mapToolTip.innerHTML = `<h2>${e.target.innerHTML}</h2>
        <div>Population: <strong>${e.target.dataset.population}</strong></div>`;
    mapToolTip.style.left = e.clientX + 30 + "px";
    mapToolTip.style.top = e.clientY - 30 + "px"; 
        });
        
        marker.addEventListener('mousemove', function(e){
    mapToolTip.style.left = e.clientX + 30 + "px";
    mapToolTip.style.top = e.clientY - 30 + "px";   
    });

    marker.addEventListener('mouseout', function (e) {
        mapToolTip.innerHTML = "";
        mapToolTip.style.left = "-9999px";
        mapToolTip.style.top = "-9999px";
    });
}
});

