async function getData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    throw Error;
  }
}

const fillCatalogue = async (url, sectionToFill) => {
  const items = await getData(`${url}`);

  items.forEach((item) => {
    const beerCard = createBeerCard(item);
    sectionToFill.append(beerCard);
  });
};

const createBeerCard = (item) => {
  const beerCard = document.createElement("a");
  beerCard.setAttribute("href", "./detail.html");
  beerCard.innerHTML = `
    <div class="beerCard">
        <h4>${item.name}<h4>
        <h5>${item.tagline}<h5>
        <img src='${item.image_url}' alt='Imagen de cerveza '${item.name}>
    </div>
     `;
  return beerCard;
};

let catalogue = document.getElementById("catalogue");

fillCatalogue("https://api.punkapi.com/v2/beers", catalogue);
