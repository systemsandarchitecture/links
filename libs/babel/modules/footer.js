// footer
const footer = document.querySelector('#footer');

// footer structure
const footerStructure = `
  <div class="container">
    <div class="row">
      <div class="content">
        <hr>
        <div class="footer-bottom">
          <p>&copy; <span id="year"></span> <a href="https://sysandarc.com/" target="_blank" rel="noopener">Systems & Architecture LLC</a></p>
          <p>All other trademarks or registered trademarks are property of their respective owners.</p>
        </div>
      </div>
    </div>
  </div>
`;

if (footer) {
  footer.innerHTML = footerStructure;
}

// year
const year = new Date();
document.querySelector('#year').textContent = year.getFullYear();
