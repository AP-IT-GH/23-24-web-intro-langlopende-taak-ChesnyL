/* In dit script plaats je de code om de kaart in de id apMap te tekenen, zodat de AP-Hogeschool met adres Ellermanstraat 33 gecentreerd staat.  
Gebruik hiervoor de documentatie op https://leafletjs.com/ 
*/

let map = L.map('apMap').setView([51.23009, 4.41616], 17);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);



let bounds = [[51.23041, 4.4155], [51.22991, 4.41675]];
L.rectangle(bounds, {color: "#2b1f3bfc", weight: 1}).addTo(map);
let apMarker = L.marker([51.23009, 4.41616]).addTo(map);
apMarker.bindPopup("<b>CyberSnip HQ</b><br>Ellermanstraat 33").openPopup();