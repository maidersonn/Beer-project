const urlParams = new URLSearchParams(window.location.search);
const beerId = urlParams.get("id");

const paintDetailBeer = async (id) => {
  const [beer] = await getData(`https://api.punkapi.com/v2/beers/${id}`);
  console.log(beer);

  const detailFrame = document.getElementById("detailFrame");
  const imageBeer = document.createElement("img");
  imageBeer.setAttribute("src", beer.image_url);
  imageBeer.setAttribute("alt", `Imagen de la cerveza ${beer.name}`);
  detailFrame.prepend(imageBeer);

  document.getElementById("beerName").innerHTML = beer.name;
  document.getElementById("beerTagline").innerHTML = beer.tagline;
  document.getElementById("descriptionInfo").innerHTML = beer.description;
  document.getElementById("vol").innerHTML += beer.abv + "%";
  document.getElementById("nameInRegion").innerHTML = beer.name;

  paintMap();
};

const paintMap = () => {
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
