const brain = require('brain.js');
const { addFileReader } = require("./images.js");
const { addOutputs, onImageDropped } = require("./trainer.js");

window.onload = function () {

  addOutputs();
  addFileReader(document.body, onImageDropped);

  /*

  const net = new brain.NeuralNetworkGPU();
  net.train([{
    input: a,
    output: {
      a: 1
    }
  },
  {
    input: b,
    output: {
      b: 1
    }
  },
  {
    input: c,
    output: {
      c: 1
    }
  }
  ], {
    log: detail => console.log(detail)
  });

  const result = brain.likely(character(
    '.#####.' +
    '#.....#' +
    '#.....#' +
    '###.###' +
    '#.....#' +
    '#.....#' +
    '#.....#'
  ), net);
    */

  //console.log(result); // 'a'

};

