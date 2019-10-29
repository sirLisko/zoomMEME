import fakeEvent from 'simulant';
import imageSaver from './imageSaver';

jest.mock('html2canvas', () => box =>
  Promise.resolve({ toDataURL: jest.fn(() => 'foo') }),
);

beforeEach(() => {
  document.body.innerHTML = `
    <div class="zoom__box"></div>
    <a class="zoom__save"></a>
    <label class="zoom__checkbox"><input type="checkbox" name="watermark" id="watermark"></label>
  `;
});

test('should create the appropriate DataUrl image', done => {
  imageSaver();
  let save = document.querySelector('.zoom__save');

  fakeEvent.fire(save, 'click');

  setTimeout(() => {
    save = document.querySelector('.zoom__save');
    expect(save.href).toContain('foo');
    expect(save.download).toBe('zoommeme');

    done();
  }, 0);
});

test('should set the correct class to the box', () => {
  imageSaver();
  const save = document.querySelector('.zoom__save');
  const zoomBox = document.querySelector('.zoom__box');
  expect(zoomBox.classList).not.toContain('zoom__box--save');

  fakeEvent.fire(save, 'click');

  expect(zoomBox.classList).toContain('zoom__box--save');
});
