const showHelpButton = document.querySelector('#open-help');
const helpContainer = document.querySelector('#help-container');

showHelpButton.addEventListener('click', () => {
  helpContainer.classList.remove('hidden');
  helpContainer.classList.add('flex');
});

helpContainer.addEventListener('click', (e) => {
  if (e.target.getAttribute('id') !== 'help-container') return;
  
  helpContainer.classList.remove('flex');
  helpContainer.classList.add('hidden');
});

const actions = {
  'copy-url': () => {
    const text = window.location;
    console.log(text)

    try {
      navigator.clipboard.writeText(text);
      showToast('Link copiado com sucesso', 'success');
    } catch {
      showToast('Não foi possível copiar o Link', 'error');
    }
  },
  'source-code': () => {
    window.open('https://github.com/ermesonqueiroz/salus', '_blank');
  },
  'action-home': () => setActiveSection('home'),
  'action-about': () => setActiveSection('about'),
  'action-services': () => setActiveSection('services'),
  'action-contact': () => setActiveSection('contact'),
};

Object.entries(actions).forEach(([key, action]) => {
  const actionEl = document.querySelector(`#${key}`);
  actionEl.addEventListener('click', action);
});
