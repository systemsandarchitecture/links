export function linksSheet(path, sheetName) {

  const links = document.querySelector('#links');

  const linksStructure = `
    <div class="container">
      <div class="row">
        <div class="content">
          <div class="links"></div>
        </div>
      </div>
    </div>
  `;

  links.innerHTML = linksStructure;

  const linksClass = document.querySelector('.links');

  function getLinks() {
    fetch('https://sheets.googleapis.com/v4/spreadsheets/1kXTa7e-cuSFU40LlEwHXFNv0WwQ_MgoJcGUinwODE6k/values/'+sheetName+'!A2:D41?key=AIzaSyALvpA28EbrTmVVOIYCus1pvM4Ye3kj4mI')
    .then((response) => { return response.json(); })
    .then((data) => { displayLinks(data); });
  }
  getLinks();

  function displayLinks(data) {

    let links = data.values;

    for (let i in links) {
      let linkName = links[i][0];
      let linkUrl = links[i][1];
      let linkImage = links[i][2];
      let linkCategory = links[i][3];

      linksData(linkName, linkUrl, linkImage, linkCategory);
    }
    function linksData(linkName, linkUrl, linkImage, linkCategory) {
      let linksItem = `
        <div class="item">
          <a href="${linkUrl}" target="_blank" rel="noopener">
            <img src="${path}/assets/images/${linkCategory}/${linkImage}.png" alt="${linkName}" class="item-image">
            <p class="item-name">${linkName}</p>
          </a>
        </div>
      `;
      linksClass.innerHTML += linksItem;
    }
  }
}