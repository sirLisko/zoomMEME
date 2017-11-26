export default function (image) {
  const zoomBox = document.querySelectorAll('.zoom__box p')

  Array.prototype.forEach.call(zoomBox, box => {
    box.appendChild(image.cloneNode(true))
  })

  const zoom = document.querySelector('.zoom')
  zoom.removeAttribute('hidden')
}
