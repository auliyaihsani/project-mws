let mymap = L.map('mapid').setView([-6.244815, 106.784379], 12);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}',
{
attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
maxZoom: 20,
id: 'mapbox.streets',
accessToken: 'pk.eyJ1IjoiYXVsaXlhaWhzYW5pIiwiYSI6ImNqb2N1dnAxZDE4czAzam53OXZxYWZkMXEifQ.3UdGNK0AGUodAdFopweiHw'
}).addTo(mymap);

// let plazaIndonesia = [-6.194801, 106.819744];

// let PiMarker = L.marker(plazaIndonesia).addTo(mymap);
// PiMarker.bindPopup("<b>Plaza Indonesia</b>").openPopup();
// PiMarker.on("click", () => {
//     let view = document.querySelector(".gambar");
//     view.style.backgroundImage = "url('images/plaza indonesia.png')";
//     let reviews = document.querySelector('.review');
//     let review = "<h1>Plaza Indonesia</h1>";
//     reviews.innerHTML = review;
// });

function findLocation(x, y) {
    // console.log(x,y);
    for (var i = 0; i < places.length; i++) {
      if (places[i].lokasi[0] == x &&
        places[i].lokasi[1] == y) {
        return i;
      }
    }
    return -1;
  }

  function showLocation(e) {
    //console.log("you clicked " + e.latlng.lat + " dan "+e.latlng.lng);
  let ix = findLocation(e.latlng.lat, e.latlng.lng);
  if (ix >= 0) {
    img.src = places[ix].gambar;
    par.textContent = places[ix].review;
  }
  }
  let gmb = document.getElementById("gmb");
  let rev = document.getElementById("review");
  let img = document.createElement('img');
  let par = document.createElement('p');
  gmb.appendChild(img);
  rev.appendChild(par);




// Replace ./data.json with your JSON feed
(async () => {
   const URL="data/peta.json";
     try {
       let resp= await(fetch(URL));
      let resp2= await resp.json();
      localStorage.setItem('places', JSON.stringify(resp2.places));
      places = resp2.places;
    for (var p of resp2.places) {
      var marker = L.marker(p.lokasi).addTo(mymap).bindPopup(p.mall);
      marker.on('click', showLocation);
    }

      }catch(err){
     console.log(err);
  } })( );





