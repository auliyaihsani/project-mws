const NAMACACHE = 'mws-v1';
const filesToCache = [
  '.',
//   project add 2 number
  'add2number/add2number.html',
//   project fetch json
  'fetchjson/css/style.css',
  'fetchjson/data/peta.json',
  'fetchjson/images/fx-sudirman.jpg',
  'fetchjson/images/gandaria city.png',
  'fetchjson/images/moi.png',
  'fetchjson/images/plaza indonesia.png',
  'fetchjson/images/pondok-indah-mall.jpeg',
  'fetchjson/js/leaftlet.js',
  'fetchjson/js/readnote.js',
  'fetchjson/readnote.html',
//   img
'img/icon/add.png',
'img/icon/calculator.png',
'img/icon/grid.png',
'img/icon/json.png',
'img/icon/map.png',
// project kalkulator
'kalkulator/css/bootstrap.min.css',
'kalkulator/css/style.css',
'kalkulator/index.html',
// layout grid
'layout/css/style.css',
'layout/img/sani',
'layout/new grid.html',
'layout/index.html',
'layout/grid2.html',
'layout/grid1.html',
'layout/OprasionalTugas.html',
// project peta
'peta/css/style.css',
'peta/images/gandaria city.png',
'peta/images/fx-sudirman.jpg',
'peta/images/moi.jpg',
'peta/images/plaza indonesia.png',
'peta/images/pondok-indah-mall.jpeg',
'js/script.js',

  'index.html',
];
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
    .then(ada_response => {
      if (ada_response) {
        return ada_response;
      }
      // tidak ada response, ambil ke jaringan
      else {
        return fetch(event.request)
      }
    })
    .catch(error => {
      return new Response("Waduh " + error);
    })
  );
});
