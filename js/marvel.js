const privateKey = 'b44dc2c4127a35cba88913525f8c62435e3a960b',
      publicKey = '3a2e384e98b44fdf82181691c89c5781',
      content = document.getElementById('content');


const getConnection = () => {
  const ts = Date.now();
  const hash = MD5(ts + privateKey + publicKey);
  const URL = "https://gateway.marvel.com/v1/public/characters?ts="+ts+"&apikey="+publicKey+"&hash="+hash;
        fetch(URL)
        .then(response => response.json())
        .then(response => {
          response.data.results.forEach(e => {
            displayHero(e);
          });
        });
};

const displayHero = e => {
  const hero = '<div>' +
    '<h2>'+ e.name +'</h2>' +
    '<img src=' + e.thumbnail +'>' +
    '<p>'+ e.description +'</p>' +
  '</div>';



  content.insertAdjacentHTML('beforeEnd', hero);
};


getConnection();
