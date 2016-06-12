import attachToDOM from './attachToDom'
import errorHandler from './errorHandler'
import imageLoader from './imageLoader'
import imagePosition from './imagePosition'
import imageRender from './imageRender'
import imageSaver from './imageSaver'
import imageZoom from './imageZoom'

if (typeof window.orientation !== 'undefined') {
  document.body.classList.add('mobile')
}

imageLoader.then(imageRender)
  .then(attachToDOM)
  .then(imagePosition)
  .then(imageZoom)
  .then(imageSaver)
  .catch(errorHandler)
