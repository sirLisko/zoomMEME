import attachToDom from "./attachToDom";

beforeEach(() => {
  document.body.innerHTML = `
    <div class="zoom"><div>
    <div class="zoom__box"><p></p><div>
    <div class="zoom__box"><p></p><div>
    <div class="zoom__box"><p></p><div>
  `;
});

test("clone the passed element for all the zoom_box in the DOM", () => {
  const element = document.createElement("span");
  element.className = "foo";

  let attachedElems = document.querySelectorAll(".foo");
  expect(attachedElems.length).toBe(0);

  attachToDom(element);

  attachedElems = document.querySelectorAll(".foo");
  expect(attachedElems.length).toBe(3);
});

test("should un-hide the zoom element", () => {
  const element = document.createElement("span");
  const zoom = document.querySelector(".zoom");
  zoom.setAttribute("hidden", true);
  expect(zoom.getAttribute("hidden")).toBeTruthy();

  attachToDom(element);
  expect(zoom.getAttribute("hidden")).toBeFalsy();
});
