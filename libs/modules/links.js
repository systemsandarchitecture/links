// links
const links = document.querySelector('#links');

// links structure
const linksStructure = `
  <div class="container">
    <div class="row">
      <div class="content">
        <div class="links"></div>
      </div>
    </div>
  </div>
`;

if (links) {
  links.innerHTML = linksStructure;
}

// links class
const linksClass = document.querySelector('.links');

// data url
const dataUrl = './assets/data/links.json';

// getting data
function getData() {
  fetch(dataUrl)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    displayData(data);
  })
}
getData();

// displaying data
function displayData(linksData) {

  let linksItems = '';

  for (let i in linksData) {

    let category = linksData[i].category;
    let items = linksData[i].items;

    for (let j in items) {

      linksItems += `
        <div class="item">
          <a href="${items[j].url}" target="_blank" rel="noopener">
            <img src="./assets/images/${category}/${items[j].image}.png" alt="${items[j].name}" class="item-image">
            <p class="item-name">${items[j].name}</p>
          </a>
        </div>
      `;
    }
  }
  linksClass.innerHTML = linksItems;
}
