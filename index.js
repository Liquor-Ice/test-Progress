const progress = document.querySelector('.progress');
const diagram = progress.querySelector('.progress__diagram');
const input = document.querySelector('.input[type="number"]');
const animButton = document.querySelector('.animate__button');
const hideButton = document.querySelector('.hide__button');

input.addEventListener('input', () => {
  const value = input.value;
  diagram.style.background = 'conic-gradient(blue ' + value + '%, whitesmoke ' + value + '% 100%)';
});

animButton.addEventListener('click', () => {
  diagram.classList.toggle('rotation');
});
hideButton.addEventListener('click', () => {
  progress.classList.toggle('hide');
});