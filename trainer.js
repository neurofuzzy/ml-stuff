const brain = require('brain.js');
const { outputs } = require("./outputs");

let top = 0;
let left = 0;
let guess = NaN;

let d = window.localStorage.getItem("trainingData");
window['_trainingData'] = d ? JSON.parse(d) : [];

let inputData;

document.getElementById("skip").onclick = () => {
  console.log("skipped");
  left += 3;
  if (left >= 30) {
    left = 0;
    top += 3;
  }
  if (top >= 30) {
    top = 0;
    left = 0;
  }
  setInputChunk();
};

document.getElementById("accept").onclick = () => {
  if (isNaN(guess)) {
    return;
  }
  
  console.log("accepted", guess);
  
  window['_trainingData'].push({
    input: inputData,
    output: outputs[guess],
  });

  /** @type {HTMLCanvasElement} */
  /* @ts-ignore */
  var outputCanvas = document.getElementById("output" + guess);
  /** @type {HTMLCanvasElement} */
  /* @ts-ignore */
  var sourceCanvas = document.getElementById("edge_scaled_image");
  var ctx = sourceCanvas.getContext('2d');
  ctx.drawImage(outputCanvas, left, top);

  left += 3;
  if (left >= 30) {
    left = 0;
    top += 3;
  }
  if (top >= 30) {
    top = 0;
    left = 0;
  }

  window.localStorage.setItem("trainingData", JSON.stringify(window['_trainingData']));

  setInputChunk();
};

const container = document.getElementById("outputs");

const addOutputs = () => {

  outputs.forEach((output, idx) => {

    const outputElement = document.createElement("div");
    outputElement.className = "chunk output_chunk";
    const outputCanvas = document.createElement("canvas");
    outputCanvas.width = 3;
    outputCanvas.height = 3;
    outputCanvas.id = "output" + idx;
    outputCanvas.className = "chunk";
    outputElement.dataset.id = `${idx}`;
    outputElement.appendChild(outputCanvas);

    const imgArray = new Uint8ClampedArray(3 * 3 * 4);
    output.forEach((val, idx) => {
      imgArray[idx * 4 + 0] = val * 255;
      imgArray[idx * 4 + 1] = val * 255;
      imgArray[idx * 4 + 2] = val * 255;
      imgArray[idx * 4 + 3] = 255
    });

    const imageData = new ImageData(3, 3);
    imageData.data.set(imgArray);

    const ctx = outputCanvas.getContext('2d');
    ctx.putImageData(imageData, 0, 0);

    container.appendChild(outputElement);

    const out = [];
    outputs.forEach(output => {
      out.push(0);
    });

    outputElement.onclick = () => {
      console.log("selected", idx);
      out[idx] = 1;
      window['_trainingData'].push({
        input: inputData,
        output: out,
      });

      /** @type {HTMLCanvasElement} */
      /* @ts-ignore */
      var sourceCanvas = document.getElementById("edge_scaled_image");
      var ctx = sourceCanvas.getContext('2d');
      ctx.drawImage(outputCanvas, left, top);

      left += 3;
      if (left >= 63) {
        left = 0;
        top += 3;
      }
      if (top >= 63) {
        top = 0;
        left = 0;
      }

      window.localStorage.setItem("trainingData", JSON.stringify(window['_trainingData']));

      setInputChunk();
    };

  });

}

const net = new brain.NeuralNetworkGPU();

const guessLikely = function () {


  if (window["_trainingData"].length > 3) {

    net.train(window["_trainingData"], {
        log: detail => console.log(detail),
        timeout: 1000,
    });

    const resultIdx = brain.likely(inputData, net);

    console.log(resultIdx)

    if (resultIdx !== undefined) {

      const result = outputs[resultIdx];
      guess = resultIdx;

      if (result && Array.isArray(result)) {

        const imgArray = new Uint8ClampedArray(3 * 3 * 4);
        result.forEach((val, idx) => {
          imgArray[idx * 4 + 0] = val * 255;
          imgArray[idx * 4 + 1] = val * 255;
          imgArray[idx * 4 + 2] = val * 255;
          imgArray[idx * 4 + 3] = 255
        });
    
        const imageData = new ImageData(3, 3);
        imageData.data.set(imgArray);
        
        /** @type {HTMLCanvasElement} */
        /* @ts-ignore */
        const likelyCanvas = document.getElementById("likely_image");
        const ctx = likelyCanvas.getContext('2d');
        ctx.putImageData(imageData, 0, 0);
        
      }

    }

  }

}

const setInputChunk = () => {
  /** @type {HTMLCanvasElement} */
  /* @ts-ignore */
  var sourceCanvas = document.getElementById("edge_scaled_image");
  /** @type {HTMLCanvasElement} */
  /* @ts-ignore */
  var targetCanvas = document.getElementById("training_image");

  var ctx = targetCanvas.getContext('2d');

  ctx.drawImage(sourceCanvas, left, top, 3, 3, 0, 0, 3, 3);
  const imageData = ctx.getImageData(0, 0, 3, 3);
  inputData = [];
  imageData.data.forEach((val, idx) => {
    if (idx % 4 === 0) {
      inputData.push(val / 255);
    }
  });
  guessLikely();

}

const onImageDropped = () => {

  top = 0;
  left = 0;

  setInputChunk();

}


module.exports = {
  addOutputs,
  onImageDropped
}