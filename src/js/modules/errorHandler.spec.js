import errorHandler from "./errorHandler";

beforeEach(() => {
  document.body.innerHTML = "<article></article";
});

test("errorHandler shows the message", () => {
  errorHandler("foo");

  const errorLabel = document.querySelector(".error");
  expect(errorLabel.innerText).toBe("An error occur foo");
});
