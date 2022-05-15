const brain = require('brain.js');

const median = function (
  data,
  width,
  height,
  windowSize = 3,
) {
  const channels = data.length / (width * height);
  const filterWindow = [];
  const limit = (windowSize - 1) / 2;

  for (let i = limit * -1; i < limit + 1; i += 1) {
    for (let j = limit * -1; j < limit + 1; j += 1) {
      filterWindow.push([i, j])
    }
  }

  for (let col = limit; col < width - limit; col += 1) {
    for (let row = limit; row < height - limit; row += 1) {
      const index = (row * width + col) * channels
      const arr = []

      for (let z = 0; z < filterWindow.length; z += 1) {
        const i = ((row + filterWindow[z][0]) * width + (col + filterWindow[z][1])) * channels
        const average = Math.sqrt((data[i] ** 2 + data[i + 1] ** 2 + data[i + 2] ** 2) / 3)

        arr.push(average)
      }

      const sorted = arr.sort((a, b) => a - b)
      const medianValue = sorted[Math.floor(sorted.length / 2)]

      data[index + 0] = medianValue
      data[index + 1] = medianValue
      data[index + 2] = medianValue

      if (channels === 4) data[index + 3] = 255
    }
  }

  return data;
}

const kernel = function (width, height, centerX, centerY) {
  this.width = width;
  this.height = height;
  this.centerX = centerX || Math.floor(width / 2);
  this.centerY = centerY || Math.floor(height / 2);
  this.weightArray = [];
  for (var h = 0; h < height; ++h) {
    this.weightArray.push([]);
    for (var w = 0; w < width; ++w) {
      this.weightArray[h].push(0);
    }
  }
}

var kernelFilter = new kernel(3,3);
for(var y=0;y<3;++y) {
  for (var x=0;x<3;++x) {
    kernelFilter.weightArray[x][y]=-2;
  }
}
kernelFilter.weightArray[1][1]=16;

function applyMedianFilter(sourceId, targetId) {

  var width = 256;
  var height = 256;
  var sourceCanvas = document.getElementById(sourceId);
  var targetCanvas = document.getElementById(targetId);

  var ctx = sourceCanvas.getContext('2d');
  var image = ctx.getImageData(0, 0, width, height);
  var pix = image.data;
  var workContext = targetCanvas.getContext('2d');
  var data = median(pix, width, height, 3);
  let imageData = new ImageData(width, height);
  imageData.data.set(data);
  workContext.putImageData(imageData, 0, 0);

}

function processImage(sourceId, targetId) {

  var width = 256;
  var height = 256;
  var sourceCanvas = document.getElementById(sourceId);
  var targetCanvas = document.getElementById(targetId);

  var ctx = sourceCanvas.getContext('2d');
  var image = ctx.getImageData(0, 0, width, height);
  var pix = image.data;
  var workContext = targetCanvas.getContext('2d');
  var workArea = workContext.getImageData(0, 0, width, height);

  var getPix = function (x, y) {
    x = Math.max(0, Math.min(x, width - 1));
    y = Math.max(0, Math.min(y, height - 1));
    var address = (y * width + x) * 4;
    return [pix[address + 0], pix[address + 1], pix[address + 2], pix[address + 3]];
  }

  var getFilteredPix = function (x, y) {
    var retVal = [0, 0, 0, 0];
    for (var fy = 0; fy < kernelFilter.height; ++fy) {
      for (var fx = 0; fx < kernelFilter.width; ++fx) {
        var m = kernelFilter.weightArray[fy][fx];
        var pix = getPix(x + fx - kernelFilter.centerX, y + fy - kernelFilter.centerY);
        retVal[0] += pix[0] * m;
        retVal[1] += pix[1] * m;
        retVal[2] += pix[2] * m;
      }
    }
    retVal[3] = 255;
    return retVal;
  }

  for (var yPos = 0; yPos < height; ++yPos) {
    for (var xPos = 0; xPos < width; ++xPos) {
      var modifiedPix = getFilteredPix(xPos, yPos);
      var address = (yPos * width + xPos) * 4;
      var lum = Math.max(modifiedPix[0], modifiedPix[1], modifiedPix[2]);
      workArea.data[address+0]=lum;
      workArea.data[address+1]=lum;
      workArea.data[address+2]=lum;
      workArea.data[address+3]=255;
    }
  }

  workContext.putImageData(workArea, 0, 0);

}

const fromDataURL = function (dataURL) {

  var img = new Image();
  img.src = dataURL;

  if (img.width == 256 && img.height == 256) {

    var sprite = document.getElementById("input_image");
    sprite.width = img.width;
    sprite.height = img.height;

    var ctx = sprite.getContext('2d');
    ctx.drawImage(img, 0, 0);

    return true;

  }

  return false;

}

const addFileReader = function (elem, listener) {

  if (elem && window.FileReader) {

    elem.ondragover = function () { elem.classList.add('dragover'); return false; };
    elem.ondragleave = function () { elem.classList.remove('dragover'); return false; };

    elem.ondrop = function (e) {

      elem.classList.remove('dragover');
      e.stopPropagation();
      e.preventDefault();

      var file = e.dataTransfer.files[0];
      var reader = new FileReader();

      reader.onload = function (event) {
        if (event.target && event.target.result) {

          if (fromDataURL(event.target.result)) {
            //listener("change_complete", "change_complete");
            applyMedianFilter("input_image", "blur_image");
            processImage("blur_image", "edge_image");
          }
        }
      };

      reader.readAsDataURL(file);

      return false;

    };

  }

}

/**
 * Return 0 or 1 for '#'
 * @param character
 * @returns {number}
 */
function integer(character) {
  if (character === '#') return 1;
  return 0;
}

/**
 * Turn the # into 1s and . into 0s. for whole string
 * @param string
 * @returns {Array}
 */
function character(string) {
  return string.trim().split('').map(integer);
}

window.onload = function () {

  addFileReader(document.body);

  const a = character(
    '.#####.' +
    '#.....#' +
    '#.....#' +
    '#######' +
    '#.....#' +
    '#.....#' +
    '#.....#'
  );
  const b = character(
    '######.' +
    '#.....#' +
    '#.....#' +
    '######.' +
    '#.....#' +
    '#.....#' +
    '######.'
  );
  const c = character(
    '#######' +
    '#......' +
    '#......' +
    '#......' +
    '#......' +
    '#......' +
    '#######'
  );

  /**
   * Learn the letters A through C.
   */
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

  /**
   * Predict the letter A, even with a pixel off.
   */
  const result = brain.likely(character(
    '.#####.' +
    '#.....#' +
    '#.....#' +
    '###.###' +
    '#.....#' +
    '#.....#' +
    '#.....#'
  ), net);


  console.log(result); // 'a'

};

