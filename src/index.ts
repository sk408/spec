"use strict";
import {initializeControls} from './controls.js';
import {createSpectrogramCanvas, createLegendCanvas, createOscilloscopeCanvas, createFrequencyCanvas} from './canvas.js';
import {initializeSpectrogram} from './spectrogram.js'

window.onload = () => {
    const fftSize = 512;
    const sampleRate = 4000;
    const maxSampleCount = 200;
    const width = .5;
    const height = .5;
    const spectrogramCanvasConfig = {
        height: height,
        width: width,
        alpha: true,
    }
    const oscilloscopeCanvasConfig = {
        height: height,
        width: width,
        alpha: true,
    }
    const legendCanvasConfig = {
        height: height,
        width: width * 1.2,
        alpha: true,
    }

    const spectrogramConfig = {
        fftSize,
        sampleRate,
        maxSampleCount,
    }
    const canvasContainer = <HTMLElement>document.getElementsByClassName('canvas')[0];
    const spectrogramCanvas = createSpectrogramCanvas(spectrogramCanvasConfig, canvasContainer);
    const legendCanvas = createLegendCanvas(legendCanvasConfig, canvasContainer);
    const oscilloscopeCanvas = createOscilloscopeCanvas(oscilloscopeCanvasConfig, canvasContainer);
    const frequencyCanvas = createFrequencyCanvas(spectrogramCanvasConfig, canvasContainer);
    const spectrogram = initializeSpectrogram(spectrogramConfig);
    if (spectrogramCanvas && legendCanvas && oscilloscopeCanvas && frequencyCanvas) {
        initializeControls(spectrogramCanvas, spectrogram, legendCanvas, oscilloscopeCanvas, frequencyCanvas);
    }
}

