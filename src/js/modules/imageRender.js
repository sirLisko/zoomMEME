function renderImage([file]) {
  const reader = new FileReader();

  return new Promise(resolve => {
    reader.onload = event => {
      const image = new Image();
      image.src = event.target.result;

      resolve(image);
    };

    reader.readAsDataURL(file);
  });
}

export default renderImage;
