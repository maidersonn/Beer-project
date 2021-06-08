const urlParams = new URLSearchParams(window.location.search);
const beerId = urlParams.get("id");

const detailBeer = async () => {
  const beer = await getData(`https://api.punkapi.com/v2/beers/${beerId}`);
  console.log(beer);
  const detailContainer = document.getElementById("detail");
  detailContainer.innerHTML = `
    <h3>${beer[0].name}</h3>
    <h4>${beer[0].tagline}</h4>
    <p>Descripción: <br> ${beer[0].description}</p>
    <p>Volumen de alcohol: ${beer[0].abv}%</p>
  `;
};

detailBeer();
