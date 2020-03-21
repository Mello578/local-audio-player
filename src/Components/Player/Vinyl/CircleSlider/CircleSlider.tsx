import React from 'react';
import { connect } from 'react-redux';
import { audioController } from 'src/utils/startStopPlay';
import { getElem } from 'src/utils/getElementById';
import { getCurrentWidth } from 'src/utils/currentWidth';
import { clamp } from 'src/utils/clamp';
import { CIRCLE_INDICATOR_OFFSET, CIRCLE_LENGTH_RADIUS } from 'src/constants/playerConst';

import { CircleSliderPropsModel, mapStateToPropsCircleSlider } from './propsComponent';
import style from './CircleSlider.module.less';

const CircleComponent: React.FC<CircleSliderPropsModel> = ({ buffered, trackName, currentTime }) => {
    const setWidthSlider = e => {
        document.addEventListener('mousemove', setCurrentTime);
        document.addEventListener('mouseup', () => {
            document.removeEventListener('mousemove', setCurrentTime);
        });

        setCurrentTime(e);

        function setCurrentTime(e) {
            if (audioController) {
                const deg = degrees(e);
                const percentSlider = deg / (180 / 100);
                const trackDuration = audioController.characteristic.tracksDuration;
                audioController.audio.currentTime = (trackDuration / 100) * percentSlider;
            }
        }

        function degrees(e) {
            const coordinateMouse = {
                top: e.pageY - window.pageYOffset,
                left: e.pageX
            };
            const circleSlider = getElem('circleCurrent') as any;
            const widthHalfElement = parseInt(circleSlider.attributes.r.nodeValue);
            const coordinatesElement = {
                // 39.5 - расстояние от нижней грани круга до начала слайдера
                bottom: circleSlider.getBoundingClientRect().bottom - 39.5,
                left: circleSlider.getBoundingClientRect().left
            };

            // координата от центра нижней границы до левого края
            const centerSlider = coordinatesElement.left + widthHalfElement;
            const widthClick = centerSlider - coordinateMouse.left;
            const heightClick = coordinatesElement.bottom - coordinateMouse.top;
            // вычисляеи угол и переводим радианы в градусы
            const corner = (Math.atan2(heightClick, widthClick) * 180) / 3.14;
            return clamp(corner, 0, 180);
        }
    };

    const setGradient = dataElement => {
        return {
            y1: dataElement ? (dataElement < 20 ? `${88 - dataElement}%` : `${100 - dataElement}%`) : `${0}%`,
            x2: dataElement ? (dataElement < 20 ? '0%' : `${dataElement}%`) : `${0}%`
        };
    };

    const shiftGradient = () => {
        if (audioController) {
            const percentCurrentTime = currentTime / (audioController.characteristic.tracksDuration / 100);
            return Math.round(percentCurrentTime);
        } else {
            return 0;
        }
    };

    const setParamsSlider = (sizeData, element) => {
        const gap = CIRCLE_LENGTH_RADIUS - sizeData;
        element.style.strokeDasharray = `${sizeData}px ${gap}px`;
    };

    const setParamsIndicator = sizeData => {
        const circleIndicator = getElem('circleIndicator');
        const dashOffset = sizeData ? CIRCLE_INDICATOR_OFFSET - sizeData : CIRCLE_INDICATOR_OFFSET;
        circleIndicator.style.strokeDashoffset = `${dashOffset}px`;
    };

    const setBufferedAndCurrentTimeOfCircleSlider = () => {
        const trackData = audioController ? audioController.characteristic : null;
        if (trackData) {
            const circleBufferElement = getElem('circleBuffer');
            const currentTimeElement = getElem('circleCurrent');

            const { bufferingWidth, currentTimeWidth } = getCurrentWidth(
                buffered,
                currentTime,
                CIRCLE_LENGTH_RADIUS * 0.75
            );
            if (audioController.characteristic.trackName === trackName) {
                setParamsSlider(bufferingWidth, circleBufferElement);
                setParamsSlider(currentTimeWidth, currentTimeElement);
                setParamsIndicator(currentTimeWidth);
            }
        }
    };

    setBufferedAndCurrentTimeOfCircleSlider();
    return (
        <svg
            width="300"
            height="300"
            xmlns="http://www.w3.org/2000/svg"
            className={style.vinylSvg}
            onMouseDown={setWidthSlider}
        >
            <defs>
                <linearGradient id="gradientBuffer" y1={setGradient(buffered).y1} x2={setGradient(buffered).x2}>
                    <stop offset="0%" stopColor={'#4e88b3'} />
                    <stop offset={`${buffered}%`} stopColor={'#41ac73'} />
                </linearGradient>
                <linearGradient
                    id="gradientCurrentTime"
                    y1={setGradient(shiftGradient()).y1}
                    x2={setGradient(shiftGradient()).x2}
                >
                    <stop offset="0%" stopColor={'#c12775'} />
                    <stop offset={`${shiftGradient()}%`} stopColor={'#7a36cf'} />
                </linearGradient>
            </defs>
            {/*стартовый индикатор*/}
            <circle
                cx="148"
                cy="159"
                r="141"
                className={style.circleStart}
                style={{ display: currentTime ? 'block' : 'none' }}
            />
            <circle
                cx="148"
                cy="159"
                r="135"
                className={style.circleBuffer}
                stroke="url(#gradientBuffer)"
                id={'circleBuffer'}
            />
            <circle
                cx="148"
                cy="159"
                r="135"
                className={style.circleCurrentTime}
                stroke="url(#gradientCurrentTime)"
                id={'circleCurrent'}
            />
            {/*индикатор (кружочек) на слайдере*/}
            <circle
                cx="148"
                cy="159"
                r="135"
                className={style.currentTimeIndicator}
                stroke="url(#gradientCurrentTime)"
                id={'circleIndicator'}
                style={{ display: currentTime ? 'block' : 'none' }}
            />
        </svg>
    );
};

export const CircleSlider = connect(mapStateToPropsCircleSlider)(CircleComponent);
