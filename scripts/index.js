const root = document.querySelector(':root');

const sections = [
  'home',
  'about',
  'services',
  'contact'
];

const routes = document.querySelectorAll('.route');
const navbar = document.querySelector('nav');
const navItems = document.querySelector('.nav-items');

let activeSection = sections[0];
let canWheel = true;

function updateStyles() {
  navbar.classList.add('bg-zinc-900/40');
  navbar.classList.add('border-b');
  navbar.classList.remove('bg-slate-900');
  navItems.classList.remove('flex');
  navItems.classList.add('hidden');
  navbar.style.opacity = 0;
  if (window.screen.width >= 768)
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

  const helpContainer = document.querySelector('#help-container');
  helpContainer.classList.remove('flex');
  helpContainer.classList.add('hidden');

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

document.addEventListener('scroll', () => {
  console.log(window.scrollY)

  if (window.scrollY > 160) {
    document.querySelector('nav').classList.remove('md:bg-transparent');
    document.querySelector('nav').classList.remove('md:border-none');
    document.querySelector('nav').classList.remove('md:backdrop-blur-0');
  } else {
    document.querySelector('nav').classList.add('md:bg-transparent');
    document.querySelector('nav').classList.add('md:border-none');
    document.querySelector('nav').classList.add('md:backdrop-blur-0');
  }
});

document
  .querySelector('.nav-icon')
  .addEventListener('click', () => {
    if (navItems.classList.contains('hidden')) {
      navbar.classList.remove('bg-zinc-900/40');
      navbar.classList.remove('border-b');
      navbar.classList.add('bg-slate-900');
      navItems.classList.remove('hidden');
      navItems.classList.add('flex');
    } else {
      navbar.classList.add('bg-zinc-900/40');
      navbar.classList.add('border-b');
      navbar.classList.remove('bg-slate-900');
      navItems.classList.remove('flex');
      navItems.classList.add('hidden');
    }
  });
