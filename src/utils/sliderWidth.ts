import { clamp } from './clamp';
import { getElem } from './getElementById';

export function setWidthSlider(e, elem, setParameters, widthMaxAndMin, props?) {
    const slider = getElem(elem);
    const indentElementX = Math.floor(e.target.getBoundingClientRect().left);
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
        const widthElement = clamp(indentClickX - indentElementX, widthMaxAndMin.min, widthMaxAndMin.max);
        setParameters(widthElement, slider, props);
    }
}
