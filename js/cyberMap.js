var map = L.map('cyberMap').setView([51.23516, 4.45977], 17);


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// marker
var marker = L.marker([51.23516, 4.45977]).addTo(cyberMap);

let bounds = [[51.23529, 4.45825], [51.23452, 4.45886]];
L.circle(bounds, {color: "#2b1f3bfc", weight: 1}).addTo(cyberMap);
let cyberMarker = L.marker([51.23009, 4.41616]).addTo(cyberMap);
apMarker.bindPopup("<b>CyberSnip HQ</b><br>Ellermanstraat 33").openPopup();

