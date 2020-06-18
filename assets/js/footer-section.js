export function footerSection() {

  const footerSection = document.querySelector('#footer-section');

  const footerSectionStructure = `
    <div class="container">
      <div class="row">
        <div class="content">
          <hr>
          <div class="footer-bottom">
            <p>&copy; 2015-<span id="year"></span> <a href="https://systemsandarchitecture.com/" target="_blank" rel="noopener">Systems & Architecture LLC</a></p>
            <p>All other trademarks or registered trademarks are property of their respective owners.</p>
          </div>
        </div>
      </div>
    </div>
  `;
  
  footerSection.innerHTML = footerSectionStructure;

  const year = new Date();
  document.querySelector('#year').textContent = year.getFullYear();
}