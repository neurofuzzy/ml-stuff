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
function pixelChunk(string) {
  return string.trim().split('').map(integer);
}

const blank = pixelChunk(
  '...' +
  '...' +
  '...'
);

const horizontalLine = pixelChunk(
  '...' +
  '###' +
  '...' 
);

const verticalLine = pixelChunk(
  '.#.' +
  '.#.' +
  '.#.' 
);

const cross = pixelChunk(
  '.#.' +
  '###' +
  '.#.' 
);

const topRightCorner = pixelChunk(
  '...' +
  '##.' +
  '.#.' 
);

const topLeftCorner = pixelChunk(
  '...' +
  '.##' +
  '.#.'
);

const bottomRightCorner = pixelChunk(
  '.#.' +
  '##.' +
  '...' 
);

const bottomLeftCorner = pixelChunk(
  '.#.' +
  '.##' +
  '...' 
);

const topT = pixelChunk(
  '...' +
  '###' +
  '.#.' 
);

const bottomT = pixelChunk(
  '.#.' +
  '###' +
  '...'
);

const leftT = pixelChunk(
  '.#.' +
  '.##' +
  '.#.' 
);

const rightT = pixelChunk(
  '.#.' +
  '##.' +
  '.#.' 
);

const topRightRoundedCorner = pixelChunk(
  '...' +
  '#..' +
  '.#.'
);

const topLeftRoundedCorner = pixelChunk(
  '...' +
  '..#' +
  '.#.'
);

const bottomRightRoundedCorner = pixelChunk(
  '.#.' +
  '#..' +
  '...' 
);

const bottomLeftRoundedCorner = pixelChunk(
  '.#.' +
  '..#' +
  '...'
);

const endTop = pixelChunk(
  '...' +
  '.#.' +
  '.#.'
);

const endBottom = pixelChunk(
  '.#.' +
  '.#.' +
  '...'
);

const endLeft = pixelChunk(
  '...' +
  '.##' +
  '...'
);

const endRight = pixelChunk(
  '...' +
  '##.' +
  '...'
);

const circle = pixelChunk(
  '.#.' +
  '#.#' +
  '.#.'
);

const square = pixelChunk(
  '###' +
  '#.#' +
  '###'
);

const diagonalRight = pixelChunk(
  '..#' +
  '.#.' +
  '#..'
);

const diagonalLeft = pixelChunk(
  '#..' +
  '.#.' +
  '..#'   
);

const horizontalCurveUp = pixelChunk(
  '..#' +
  '##.' +
  '...'
);

const horizontalCurveDown = pixelChunk(
  '...' +
  '##.' +
  '..#'
);

const curveDownHorizontal = pixelChunk(
  '#..' +
  '.##' +
  '...'
);

const curveUpHorizontal = pixelChunk(
  '...' +
  '.##' +
  '#..'
);

const verticalCurveLeft = pixelChunk(
  '.#.' +
  '.#.' +
  '#..'
);

const verticalCurveRight = pixelChunk(
  '.#.' +
  '.#.' +
  '..#'
);

const curveLeftVertical = pixelChunk(
  '#..' +
  '.#.' +
  '.#.'
);

const curveRightVertical = pixelChunk(
  '..#' +
  '.#.' +
  '.#.'
);






const outputs = [
  blank,
  horizontalLine,
  verticalLine,
  cross,
  topRightCorner,
  topLeftCorner,
  bottomRightCorner,
  bottomLeftCorner,
  topT,
  bottomT,
  leftT,
  rightT,
  topRightRoundedCorner,
  topLeftRoundedCorner,
  bottomRightRoundedCorner,
  bottomLeftRoundedCorner,
  endTop,
  endBottom,
  endLeft,
  endRight,
  circle,
  square,
  diagonalRight,
  diagonalLeft,
  horizontalCurveUp,
  horizontalCurveDown,
  curveDownHorizontal,
  curveUpHorizontal,
  verticalCurveLeft,
  verticalCurveRight,
  curveLeftVertical,
  curveRightVertical,
];

module.exports = {
  pixelChunk,
  outputs,
}
