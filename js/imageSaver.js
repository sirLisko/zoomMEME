import html2canvas from 'html2canvas';

function saveCanvas({ target }) {
  const btn = target;
  html2canvas(document.querySelector('.zoom__box')).then(canvas => {
    btn.href = canvas.toDataURL('image/png');
    btn.download = 'zoomeme';
  });
}

function saveImage() {
  const save = document.querySelector('.zoom__save');
  save.addEventListener('click', saveCanvas);
}

export default saveImage;
