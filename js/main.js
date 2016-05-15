import imageLoader from './imageLoader';
import imageRender from './imageRender';
import attachToDOM from './attachToDOM';
import errorHandler from './errorHandler';

imageLoader.then(imageRender)
  .then(attachToDOM)
  .catch(errorHandler);
