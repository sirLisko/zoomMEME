function errorHandler(err) {
  const error = document.createElement('p');
  error.className = 'error';
  error.innerText = `An error occur ${err}`;

  document.querySelector('article').appendChild(error);
}

export default errorHandler;
