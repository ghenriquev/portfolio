let navbarHeight = `${document.querySelector('#head').offsetHeight}px`;
document.documentElement.style.setProperty('--nav-height', navbarHeight);

let aboutButtons = document.querySelectorAll('.about-button');
aboutButtons.forEach((button) => {
  button.addEventListener('click', changeAboutFill);
});

function changeAboutFill() {
  let button = this;
  let actualP = button.children[0];
  let actualBelowLine = button.children[1];
  let previousP = document.querySelector('.text-white');
  let previousBelowLine = document.querySelector('.show-blw-line');
  let aboutList = document.querySelector('.about-list');

  if (previousP && previousBelowLine) {
    previousP.classList.remove('text-white');
    previousBelowLine.classList.remove('show-blw-line');
    previousBelowLine.classList.add('hide-blw-line');
  }

  actualP.classList.add('text-white');
  actualBelowLine.classList.remove('hide-blw-line');
  actualBelowLine.classList.add('show-blw-line');

  if (button.classList.contains('techs')) {
    console.log('Techs clicked');
    aboutList.innerHTML =
      '<li class="tech-li"><img src="./assets/html-5.png" alt="HTML5-Logo" /></li><li class="tech-li"><img src="./assets/css-3.png" alt="CSS3-Logo" /></li><li class="tech-li"><img src="./assets/js.png" alt="Javascript-Logo" /></li><li class="tech-li"><img src="./assets/jquery.png" alt="jQuery-Logo" /></li><li class="tech-li"><img src="./assets/github2.png" alt="Github-Logo" /></li><li class="tech-li"><img src="./assets/git.png" alt="Git-Logo" /></li>';
  }

  if (button.classList.contains('education')) {
    console.log('Educations clicked');
    aboutList.innerHTML =
      '<li class="edu-li">Análise e Desenvolvimento de Sistemas<br><span class="xs-text ml-3">Faculdade Descomplica - <strong>Cursando</strong></span><br><span class="xs-text ml-3">(Jan, 2023 - Jul, 2025)</span></li>';
  }
}

const presentationText = document.querySelector('.presentation-text');
const presentationImg = document.querySelector('.presentation-img');

const headerObserver = new IntersectionObserver((entries) => {
  for (entry of entries) {
    const intersecting = entry.isIntersecting;
    console.log(entry);
    if (intersecting) {
      entry.target.classList.remove('scale-50');
      entry.target.classList.add('scale-100');
    }
  }
});

headerObserver.observe(presentationText);
headerObserver.observe(presentationImg);

const aboutDescription = document.querySelector(".about-description");
const aboutTechs = document.querySelector('.about-techs');

const aboutObserver = new IntersectionObserver((entries) => {});

const cardImage = document.querySelector('.card-img');

cardImage.addEventListener('mouseenter', (e) => {
  const cardOverlay = e.target.children[0];
  cardOverlay.classList.remove('hidden');
  cardOverlay.classList.add('flex');
});

cardImage.addEventListener('mouseleave', (e) => {
  const cardOverlay = e.target.children[0];
  cardOverlay.classList.remove('flex');
  cardOverlay.classList.add('hidden');
})