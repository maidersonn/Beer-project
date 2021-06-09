const urlParams = new URLSearchParams(window.location.search);
const beerId = urlParams.get("id");

const paintDetailBeer = async () => {
  const beer = await getData(`https://api.punkapi.com/v2/beers/${beerId}`);
  console.log(beer);
  const detailContainer = document.getElementById("detail");
  detailContainer.innerHTML = `
    <h3>${beer[0].name}</h3>
    <h4>${beer[0].tagline}</h4>
    <p>Descripción: <br> ${beer[0].description}</p>
    <p>Volumen de alcohol: ${beer[0].abv}%</p>
  `;
  painMap();
};

const painMap = () => {
  mapboxgl.accessToken =
    "pk.eyJ1IjoibWFpZGVyc29ubiIsImEiOiJja3BwaWZpOTIxY2I3MnFxcWp5cXRpY2llIn0.dpaALoCb1yPrti_QGvTlcQ";

  const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: [-74.5, 40],
    zoom: 9,
  });
};

paintDetailBeer();
