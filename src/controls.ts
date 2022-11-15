import {SpectralTimeSeries} from './spectrogram.js'
import {Canvas} from './canvas.js';

function initializeControls(canvas: Canvas, timeSeries: SpectralTimeSeries) {

    const startButton = document.getElementById("startButton");
    if (startButton != null) {
        startButton.addEventListener("click", () => {
            if (canvas != null) {
                canvas.startAnimating(timeSeries, canvas);
            }
        });
    }

    const stopButton = document.getElementById("stopButton");
    if (stopButton != null) {
        stopButton.addEventListener("click", () => {
            if (canvas != null && canvas.animationFrame != null) {
                canvas.stopAnimating(canvas.animationFrame);
            }
        });
    }

    const resetButton = document.getElementById("resetButton");
    if (resetButton != null) {
        resetButton.addEventListener("click", () => {
            timeSeries.clearDecibelValues(timeSeries);
        });
    }
}

export {initializeControls}

// function loadControlsUI() {
//     // const fragment = document.createDocumentFragment();
//     const controls = document.createElement("div");
//     controls.className = "controls";
//     const controlHeader = document.createElement("h2");
//     controlHeader.textContent = "Controls";
//     controls.appendChild(controlHeader);

//     const volumeLabel = document.createElement("label")
//     volumeLabel.innerHTML = "Volume"
//     volumeLabel.setAttribute("for", "volume")
//     controls.appendChild(volumeLabel);

//     document.body.insertAdjacentElement("beforeend", controls);
// }

// export {loadControlsUI};