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
