function inOrOut(target) {
  return target.classList.contains('zoom__ctrl--in') ? 1 : -1;
}

function imageZoom() {
  const zoomBox = document.querySelector('.zoom__box');

  zoomBox.addEventListener('click', e => {
    if (!e.target.classList.contains('zoom__ctrl')) {
      return;
    }
    e.preventDefault();
    const img = e.target.parentNode.querySelector('img');
    const width = img.offsetWidth;
    img.style.width = `${width + inOrOut(e.target) * 50}px`;
  });
}

export default imageZoom;
