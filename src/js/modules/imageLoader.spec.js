import mockEvent from "./utils";

beforeEach(() => {
  jest.resetModules();

  document.body.innerHTML = `
    <div id="holder">
      <input type="text" />
    </div>
    <div class="dropper"></div>
  `;
});

describe("file input", () => {
  test("read files and filter images", (done) => {
    const mockInput = mockEvent("input", "onchange");
    const imageLoader = require("./imageLoader").default;

    imageLoader
      .then((image) => {
        expect(image).toBeTruthy();
        done();
      })
      .catch(done);

    mockInput.cb({ target: { files: [{ type: "image" }] } });
  });

  test("read files and rise an error if not images", (done) => {
    const mockInput = mockEvent("input", "onchange");
    const imageLoader = require("./imageLoader").default;

    imageLoader.then(done).catch((error) => {
      expect(error).toEqual(expect.any(Error));
      expect(error.message).toBe("Format not supported.");
      done();
    });
    mockInput.cb({ target: { files: [{ type: "text" }] } });
  });
});

describe("file drop", () => {
  test("read files and filter images", (done) => {
    const mockDrop = mockEvent("#holder", "ondrop");
    const imageLoader = require("./imageLoader").default;

    imageLoader
      .then((image) => {
        expect(image).toBeTruthy();
        done();
      })
      .catch(done);

    mockDrop.cb({
      preventDefault: () => {},
      dataTransfer: { files: [{ type: "image" }] },
    });
  });

  test("read files and rise an error if not images", (done) => {
    const mockDrop = mockEvent("#holder", "ondrop");
    const imageLoader = require("./imageLoader").default;

    imageLoader.then(done).catch((error) => {
      expect(error).toEqual(expect.any(Error));
      expect(error.message).toBe("Format not supported.");
      done();
    });

    mockDrop.cb({
      preventDefault: () => {},
      dataTransfer: { files: [{ type: "text" }] },
    });
  });
});

test("disable holder dragover and dragend", () => {
  // eslint-disable-next-line no-unused-expressions
  require("./imageLoader").default;

  const holder = document.querySelector("#holder");
  expect(holder.ondragover()).toBeFalsy();
  expect(holder.ondragend()).toBeFalsy();
});
