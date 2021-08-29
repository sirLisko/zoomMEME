import imageRender from "./imageRender";

const readAsDataURL = jest.fn();

window.FileReader = jest.fn(() => ({
  readAsDataURL,
}));

test("should read the file", (done) => {
  imageRender(["foo"]);

  setTimeout(() => {
    expect(readAsDataURL).toHaveBeenCalledWith("foo");
    done();
  }, 0);
});
