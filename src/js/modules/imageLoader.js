const holder = document.getElementById("holder");

holder.ondragover = () => false;
holder.ondragend = () => false;

function checkFiles(files) {
  return Array.from(files).filter((file) => /image/.exec(file.type));
}

export default new Promise((resolve, reject) => {
  function readfiles(files) {
    const images = checkFiles(files);

    if (images.length) {
      resolve(images);
      document.querySelector(".dropper").setAttribute("hidden", "hidden");
    } else {
      reject(new Error("Format not supported."));
    }
  }

  holder.addEventListener("drop", (e) => {
    e.preventDefault();
    readfiles(e.dataTransfer.files);
  });

  holder
    .querySelector("input")
    .addEventListener("change", (e) => readfiles(e.target.files));
});
