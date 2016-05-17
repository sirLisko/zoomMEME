import imageLoader from './imageLoader';
import imageRender from './imageRender';
import attachToDOM from './attachToDom';
import errorHandler from './errorHandler';
import imagePosition from './imagePosition';
import imageZoom from './imageZoom';

imageLoader.then(imageRender)
  .then(attachToDOM)
  .then(imagePosition)
  .then(imageZoom)
  .catch(errorHandler);
