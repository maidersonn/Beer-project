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
    console.log(item);
    const beerCard = document.createElement("div");
    beerCard.setAttribute("class", "beerCard");
    beerCard.innerHTML = `
   <h4>${item.name}<h4>
   <h5>${item.tagline}<h5>
   <img src='${item.image_url}' alt='Imagen de cerveza '${item.name}>
   `;
    sectionToFill.append(beerCard);
  });
};

let catalogue = document.getElementById("catalogue");

fillCatalogue("https://api.punkapi.com/v2/beers", catalogue);
