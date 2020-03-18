import {clamp} from './clamp';

import {getElem} from './getElementById';

export function setWidthSlider(e, elem, setParameters, widthMaxAndMin, props) {
  const slider = getElem(elem);
  const indentElementX = Math.floor(e.target.getBoundingClientRect().left);
  let widthElement;
  let indentClickX = e.clientX;


  document.addEventListener('mousemove', setWithToScroll);
  document.addEventListener('mouseup', () => {
    document.removeEventListener('mousemove', setWithToScroll);
  });

  calculationAndRenderingSlider();

  function setWithToScroll(event) {
    indentClickX = event.clientX;
    calculationAndRenderingSlider();
  }

  function calculationAndRenderingSlider() {
    widthElement = indentClickX - indentElementX;
    widthElement = clamp(widthElement, widthMaxAndMin.min, widthMaxAndMin.max);
    setParameters(widthElement, slider, props);
  }
}
