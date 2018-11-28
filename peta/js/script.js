let mymap = L.map('mapid').setView([-6.194801, 106.819744], 12);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}',
{
attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC - BY - SA</a>, Imagery© <a href ="https://www.mapbox.com/"> Mapbox </a>',
maxZoom: 20,
id: 'mapbox.streets',
accessToken: 'pk.eyJ1IjoiYXVsaXlhaWhzYW5pIiwiYSI6ImNqb2N1dnAxZDE4czAzam53OXZxYWZkMXEifQ.3UdGNK0AGUodAdFopweiHw'
}).addTo(mymap);

let plazaIndonesia = [-6.194801, 106.819744];

let PiMarker = L.marker(plazaIndonesia).addTo(mymap);
PiMarker.bindPopup("<b>Plaza Indonesia</b>").openPopup();
PiMarker.on("click", () => {
    let view = document.querySelector(".view-map");
    view.style.backgroundImage = "url('images/plaza indonesia.png')";
    let reviews = document.querySelector('.review');
    let review = "<h1>Plaza Indonesia</h1>";
    reviews.innerHTML = review;
});

let places = [
    {
        "lokasi": [-6.244815, 106.784379], "mall": "gandaria-city mall",
        "review": "disini mall gandaria city",
        "image": "gandaria city.png"
    },
    {
        "lokasi": [-6.265508, 106.783127], "mall": "pondok indah mall",
        "review": "disini pondok indah mall",
        "image": "pondok-indah-mall.jpeg"
    },
    {
        "lokasi": [-6.224509, 106.803833], "mall": "fx sudirman",
        "review": "disini mall fx sudirman ",
        "image": "fx-sudirman.jpg"
    },
    {
        "lokasi": [-6.151051, 106.892079], "mall": "Mall of indonesia",
        "review": "disini mall of indonesia",
        "image": "moi.jpg"
    },
];

for(let place of places) {
    let marker = L.marker(place.lokasi).addTo(mymap).bindPopup(place["mall"]);
    marker.on("click", () => {
    let view = document.querySelector(".view-map");
    view.style.backgroundImage = "url('images/" + place.image +"')";
    let reviews = document.querySelector('.review');
    let review = "<h1>" + place.review +"</h1>";
    reviews.innerHTML = review;
    });
}

var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent(" menunjuk tempat ke " + e.latlng.toString())
        .openOn(mymap);
}

mymap.on('click', onMapClick);