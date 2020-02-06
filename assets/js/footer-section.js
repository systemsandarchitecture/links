export function footerSection() {

  let footerSection = document.querySelector('#footer-section');

  let footerSectionStructure = `
    <div class="container">
      <div class="row">
        <div class="content">
          <hr>
          <div class="footer-bottom">
            <p>&copy; <span id="year"></span> <a href="https://systemsandarchitecture.com/" target="_blank" rel="noopener">Systems & Architecture LLC</a></p>
            <p>All other trademarks or registered trademarks are property of their respective owners.</p>
          </div>
        </div>
      </div>
    </div>
  `;
  
  if (footerSection) {
    footerSection.innerHTML = footerSectionStructure;

    let year = new Date();
    document.querySelector('#year').textContent = year.getFullYear();
  }
}