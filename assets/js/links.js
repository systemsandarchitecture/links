export function links(path, link) {

  // data url
  let dataUrl = path+'/assets/data/'+link+'.json';

  // links id
  let links = document.querySelector('#links');

  // links structure
  let linksStructure = `
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

    // links class
    let linksClass = document.querySelector('.links');

    // getting data
    function getData() {
      fetch(dataUrl)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        displayData(data);
      });
    }
    getData();

    // displaying data
    function displayData(linksData) {

      let linksItem = '';

      for (let i in linksData) {
        
        let category = linksData[i].category;
        let items = linksData[i].items;

        for (let j in items) {

          linksItem += `
            <div class="item">
              <a href="${items[j].url}" target="_blank" rel="noopener">
                <img src="../assets/images/${category}/${items[j].image}.png" alt="${items[j].name}" class="item-image">
                <p class="item-name">${items[j].name}</p>
              </a>
            </div>
          `;
        }
      }
      linksClass.innerHTML = linksItem;
    }
  }
}