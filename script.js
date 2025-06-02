const sticker = document.getElementById('sticker');
const flap = document.querySelector('.flap');
const envelopeFront = document.querySelector('.envelope-front');
const letters = document.getElementById('letters');

sticker.addEventListener('click', () => {
  // "Partir" o lacre
  sticker.style.display = 'none';

  // Abrir a aba do envelope
  flap.style.transform = 'rotateX(-180deg)';

  // Após a aba abrir, mostrar as cartas
  setTimeout(() => {
    envelopeFront.style.transform = 'rotateX(-180deg)';
    letters.style.display = 'flex';
  }, 1000);
});
