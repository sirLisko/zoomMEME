export default function (image) {
  const zoom = document.querySelector('.zoom');

  zoom.insertAdjacentHTML('beforeend',
    `<p class="zoom__box zoom__box--1">${image.cloneNode(true).outerHTML}</p>
    <p class="zoom__box zoom__box--2">${image.cloneNode(true).outerHTML}</p>
    <p class="zoom__box zoom__box--3">${image.cloneNode(true).outerHTML}</p>
    <p class="zoom__box zoom__box--4">${image.cloneNode(true).outerHTML}</p>`);
}
