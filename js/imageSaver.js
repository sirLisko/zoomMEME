import html2canvas from 'html2canvas';

function saveCanvas({ target }) {
  const btn = target;
  const zoomBox = document.querySelector('.zoom__box');

  zoomBox.classList.add('zoom__box--save');

  html2canvas(zoomBox).then(canvas => {
    btn.href = canvas.toDataURL('image/png');
    btn.download = 'zoomeme';
  });
}

function saveImage() {
  const save = document.querySelector('.zoom__save');
  save.addEventListener('click', saveCanvas);
}

export default saveImage;
