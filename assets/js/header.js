export function header(headerTitle, headerLink) {

  const header = document.querySelector('header');

  const headerStructure = `
    <nav class="navbar navbar-top">
      <div class="container">
        <div class="row">
          <div class="nav">
            <div class="navbar-header">
              <a href="./${headerLink}.html" class="navbar-brand">
                <h1 class="navbar-title">${headerTitle}</h1>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  `;

  header.innerHTML = headerStructure;
}