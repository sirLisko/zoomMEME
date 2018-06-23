export default function(selector, event) {
  let mock = {
    selector,
    event,
  };

  const sel =
    selector === document ? document : document.querySelector(selector);

  sel.addEventListener = (evt, cb) => {
    mock.cb = cb;
  };

  return mock;
}
