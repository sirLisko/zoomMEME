import imageLoader from './imageLoader';
import imageRender from './imageRender';
import attachToDOM from './attachToDom';
import errorHandler from './errorHandler';
import imagePosition from './imagePosition';
import imageZoom from './imageZoom';
import imageSaver from './imageSaver';

imageLoader.then(imageRender)
  .then(attachToDOM)
  .then(imagePosition)
  .then(imageZoom)
  .then(imageSaver)
  .catch(errorHandler);
