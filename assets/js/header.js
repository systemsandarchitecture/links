export function header(title, link) {

  let header = document.querySelector('header');

  let headerStructure = `
    <nav class="navbar navbar-top">
      <div class="container">
        <div class="row">
          <div class="nav">
            <div class="navbar-header">
              <a href="./${link}.html" class="navbar-brand">
                <h1 class="navbar-title"></h1>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  `;

  if (header) {

    header.innerHTML = headerStructure;

    let navbarTitle = title;
    
    document.querySelector('.navbar-title').textContent = navbarTitle;
  }
}