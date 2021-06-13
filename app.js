const createBeerCard = (item) => {
  const beerCard = document.createElement("a");
  beerCard.setAttribute("href", `./detail.html?id=${item.id}`);
  beerCard.innerHTML = `
    <div class="beerCard">
      <div class="beerInfo">
        <p>${item.name}</p>
        <p>${item.tagline}</p>
      </div>
      <img src='${item.image_url}' alt='Imagen de cerveza '${item.name}>

    </div>
     `;
  return beerCard;
};

const fillCatalogue = async (url, sectionToFill) => {
  const items = await getData(`${url}`);

  items.forEach((item) => {
    const beerCard = createBeerCard(item);
    sectionToFill.append(beerCard);
  });
};

let catalogue = document.getElementById("catalogue");

let numPag = 1;
const nextPage = document.getElementById("next");
const prevPage = document.getElementById("previous");

fillCatalogue("https://api.punkapi.com/v2/beers?page=" + numPag, catalogue);

nextPage.addEventListener("click", () => {
  numPag++;
  catalogue.innerHTML = "";
  fillCatalogue("https://api.punkapi.com/v2/beers?page=" + numPag, catalogue);
});

prevPage.addEventListener("click", () => {
  numPag = numPag === 1 ? numPag : --numPag;
  catalogue.innerHTML = "";
  fillCatalogue("https://api.punkapi.com/v2/beers?page=" + numPag, catalogue);
});
