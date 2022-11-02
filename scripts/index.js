const root = document.querySelector(':root');

const sections = [
  'home',
  'about',
  'teams',
  'services',
  'portfolio'
];

const routes = document.querySelectorAll('.route');
const navbar = document.querySelector('nav');

let activeSection = sections[0];
let canWheel = true;

function updateStyles() {
  navbar.style.opacity = 0;
  setTimeout(() => {
    navbar.style.display = 'none';
  }, 500);

  setTimeout(() => {
    routes.forEach(route => {
      route.style.zIndex = route.hasAttribute('section-active')
        ? 4
        : 1;

      return route.style.display = route.hasAttribute('section-active') || route.hasAttribute('hiding')
        ? 'flex'
        : 'none';
    });
  }, 500);

  setTimeout(() => {
    navbar.style.display = 'flex';
  }, 1300);
    
  setTimeout(() => {
    navbar.style.opacity = 1
    routes.forEach(route => {
      if (route.hasAttribute('hiding'))
        route.style.display = 'none';
      route.removeAttribute('hiding');
    });
  }, 1500);
}

function setActiveSection(section = 'home') {
  if (section === activeSection) return;

window.scrollTo({ top: 0, behavior: 'smooth' })

  let pastActiveSection = activeSection;
  
  activeSection = section;
  
  routes.forEach(route => {
    if (route.id === pastActiveSection)
    route.setAttribute('hiding', '');
  
    if (route.hasAttribute('section-active'))
    return route.removeAttribute('section-active');
    
    if (route.id === activeSection.toLowerCase()) {
      route.style.opacity = 1;
      return route.setAttribute('section-active', '');
    }
  });

  verifyIfAnimationIsToRightOrLeft(pastActiveSection, section);

  updateStyles();
}

const navbarItems = document.querySelectorAll('li');

navbarItems.forEach(navbarItem => {
  navbarItem.addEventListener('click', e => {
    setActiveSection(navbarItem.getAttribute('route'));
  });
});

function verifyIfAnimationIsToRightOrLeft(activeRoute, route) {
  const left = sections.indexOf(activeRoute) < sections.indexOf(route);

  root.style.setProperty(
    '--anim-direction',
    left
      ? 'LeftActiveRoute 1s ease' : 'RightActiveRoute 1s ease'
  );

}

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    document.querySelector('nav').classList.add('nav-with-bg');
  } else {
    document.querySelector('nav').classList.remove('nav-with-bg');
  }
});
