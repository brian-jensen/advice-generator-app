const adviceId = document.querySelector('.card-header-title');
const advice = document.querySelector('.card-advice-text');
const button = document.querySelector('.card-footer-button');
const divider = document.querySelector('.card-footer img');

const handleDom = data => {
  const desktop = window.matchMedia('(min-width: 48em)');

  if (desktop.matches) {
    divider.src = './images/pattern-divider-desktop.svg';
  } else {
    divider.src = './images/pattern-divider-mobile.svg';
  }

  if(data.hasOwnProperty('slip'))  { 
    adviceId.textContent = `Advice #${data.slip.id}`;
    adviceId.classList.add('animation');

    advice.innerHTML = `&ldquo;${data.slip.advice}&rdquo;`;
    advice.classList.add('animation');

    setTimeout(() => {
      adviceId.classList.remove('animation');
      advice.classList.remove('animation');
    }, 1000)
  }
}

const handleFetch = () => {
  fetch('https://api.adviceslip.com/advice', { cache: 'no-store' })
  .then(res => res.json())
  .then(data => handleDom(data))
  .catch(err => console.error(err));
}

button.addEventListener('click', handleFetch);
addEventListener('resize', handleDom);
addEventListener('load', handleDom);
