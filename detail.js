const urlParams = new URLSearchParams(window.location.search);
const beerId = urlParams.get("id");

const paintDetailBeer = async (id) => {
  const [beer] = await getData(`https://api.punkapi.com/v2/beers/${id}`);
  console.log(beer);
  const detailContainer = document.getElementById("detail");
  detailContainer.innerHTML = `
    <h3>${beer.name}</h3>
    <h4>${beer.tagline}</h4>
    <p>Descripción: <br> ${beer.description}</p>
    <p>Volumen de alcohol: ${beer.abv}%</p>
  `;
  painMap();
};

const painMap = () => {
  mapboxgl.accessToken =
    "pk.eyJ1IjoibWFpZGVyc29ubiIsImEiOiJja3BwaWZpOTIxY2I3MnFxcWp5cXRpY2llIn0.dpaALoCb1yPrti_QGvTlcQ";

  const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: [getRandomNumber(-180, 180, 2), getRandomNumber(-90, 90, 2)],
    zoom: 6,
  });
};

function getRandomNumber(from, to, fixed) {
  return (Math.random() * (to - from) + from).toFixed(fixed) * 1;
}

paintDetailBeer(beerId);
