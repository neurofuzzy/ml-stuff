const { outputs } = require("./outputs");

let top = 0;
let left = 0;

window['_trainingData'] = [];

let inputData;

const addOutputs = () => {

  outputs.forEach((output, idx) => {

    const outputElement = document.createElement("div");
    outputElement.className = "chunk output_chunk";
    const outputCanvas = document.createElement("canvas");
    outputCanvas.width = 7;
    outputCanvas.height = 7;
    outputCanvas.className = "chunk";
    outputElement.dataset.id = `${idx}`;
    outputElement.appendChild(outputCanvas);

    const container = document.getElementById("outputs");

    const imgArray = new Uint8ClampedArray(7 * 7 * 4);
    output.forEach((val, idx) => {
      imgArray[idx * 4 + 0] = val;
      imgArray[idx * 4 + 1] = val;
      imgArray[idx * 4 + 2] = val;
      imgArray[idx * 4 + 3] = 255
    });

    const imageData = new ImageData(7, 7);
    imageData.data.set(imgArray);

    const ctx = outputCanvas.getContext('2d');
    ctx.putImageData(imageData, 0, 0);

    container.appendChild(outputElement);

    outputElement.onclick = () => {
      console.log("selected", idx);
      window['_trainingData'].push({
        input: inputData,
        output: output
      });

      /** @type {HTMLCanvasElement} */
      /* @ts-ignore */
      var sourceCanvas = document.getElementById("edge_scaled_image");
      var ctx = sourceCanvas.getContext('2d');
      ctx.drawImage(outputCanvas, left, top);

      left += 7;
      if (left >= 63) {
        left = 0;
        top += 7;
      }
      if (top >= 63) {
        top = 0;
        left = 0;
      }

      setInputChunk();
    };

  });

}

const setInputChunk = () => {
  /** @type {HTMLCanvasElement} */
  /* @ts-ignore */
  var sourceCanvas = document.getElementById("edge_scaled_image");
  /** @type {HTMLCanvasElement} */
  /* @ts-ignore */
  var targetCanvas = document.getElementById("training_image");

  var ctx = targetCanvas.getContext('2d');

  ctx.drawImage(sourceCanvas, left, top, 7, 7, 0, 0, 7, 7);
  const imageData = ctx.getImageData(0, 0, 7, 7);
  inputData = [];
  imageData.data.forEach((val, idx) => {
    if (idx % 4 === 0) {
      inputData.push(val);
    }
  });


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