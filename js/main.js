(function(){
  var acceptedTypes = {
    'image/png': true,
    'image/jpeg': true,
    'image/gif': true
  };

  function previewfile(file) {
    if (acceptedTypes[file.type]) {
      var reader = new FileReader();
      reader.onload = function (event) {
        var image = new Image();
        image.src = event.target.result;
        holder.appendChild(image);

        var zoom = document.querySelector('.zoom');

        zoom.insertAdjacentHTML('beforeend', '<p class="zoom__box zoom__box--1">' + image.cloneNode(true).outerHTML + '</p>');
        zoom.insertAdjacentHTML('beforeend', '<p class="zoom__box zoom__box--2">' + image.cloneNode(true).outerHTML + '</p>');
        zoom.insertAdjacentHTML('beforeend', '<p class="zoom__box zoom__box--3">' + image.cloneNode(true).outerHTML + '</p>');
        zoom.insertAdjacentHTML('beforeend', '<p class="zoom__box zoom__box--4">' + image.cloneNode(true).outerHTML + '</p>');
      };

      reader.readAsDataURL(file);
    }  else {
      holder.innerHTML += '<p>Uploaded ' + file.name + ' ' + (file.size ? (file.size/1024|0) + 'K' : '');
      console.log(file);
    }
  }

  function readfiles(files) {
      for (var i = 0; i < files.length; i++) {
        previewfile(files[i]);
      }
  }


  var holder = document.getElementById('holder');

  holder.ondragover = function (e) {
    console.log(this);
    return false;
  };
  holder.ondragend = function () {
    console.log('end');
    return false;
  };
  holder.ondrop = function (e) {
    console.log('drop');
    e.preventDefault();
    readfiles(e.dataTransfer.files);
  }

  var fileupload = document.getElementById('upload');
  fileupload.querySelector('input').onchange = function () {
    readfiles(this.files);
  };
})();
