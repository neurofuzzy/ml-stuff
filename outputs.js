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
  '.......' +
  '.......' +
  '.......' +
  '.......' +
  '.......' +
  '.......' +
  '.......'
);

const horizontalLine = pixelChunk(
  '.......' +
  '.......' +
  '.......' +
  '#######' +
  '.......' +
  '.......' +
  '.......'
);

const cross = pixelChunk(
  '...#...' +
  '...#...' +
  '...#...' +
  '#######' +
  '...#...' +
  '...#...' +
  '...#...'
);

const verticalLine = pixelChunk(
  '...#...' +
  '...#...' +
  '...#...' +
  '...#...' +
  '...#...' +
  '...#...' +
  '...#...'
);

const topRightCorner = pixelChunk(
  '.......' +
  '.......' +
  '.......' +
  '####...' +
  '...#...' +
  '...#...' +
  '...#...'
);

const topLeftCorner = pixelChunk(
  '.......' +
  '.......' +
  '.......' +
  '...####' +
  '...#...' +
  '...#...' +
  '...#...'
);

const bottomRightCorner = pixelChunk(
  '...#...' +
  '...#...' +
  '...#...' +
  '####...' +
  '.......' +
  '.......' +
  '.......'
);

const bottomLeftCorner = pixelChunk(
  '...#...' +
  '...#...' +
  '...#...' +
  '...####' +
  '.......' +
  '.......' +
  '.......'
);

const topT = pixelChunk(
  '.......' +
  '.......' +
  '.......' +
  '#######' +
  '...#...' +
  '...#...' +
  '...#...'
);

const bottomT = pixelChunk(
  '...#...' +
  '...#...' +
  '...#...' +
  '#######' +
  '.......' +
  '.......' +
  '.......'
);

const leftT = pixelChunk(
  '...#...' +
  '...#...' +
  '...#...' +
  '...####' +
  '...#...' +
  '...#...' +
  '...#...'
);

const rightT = pixelChunk(
  '...#...' +
  '...#...' +
  '...#...' +
  '####...' +
  '...#...' +
  '...#...' +
  '...#...'
);

const topRightRoundedCorner = pixelChunk(
  '.......' +
  '.......' +
  '.......' +
  '##.....' +
  '..#....' +
  '...#...' +
  '...#...'
);

const topLeftRoundedCorner = pixelChunk(
  '.......' +
  '.......' +
  '.......' +
  '.....##' +
  '....#..' +
  '...#...' +
  '...#...'
);

const bottomRightRoundedCorner = pixelChunk(
  '...#...' +
  '...#...' +
  '..#....' +
  '##.....' +
  '.......' +
  '.......' +
  '.......'
);

const bottomLeftRoundedCorner = pixelChunk(
  '...#...' +
  '...#...' +
  '....#..' +
  '.....##' +
  '.......' +
  '.......' +
  '.......'
);

const forwardRoundedCorners = pixelChunk(
  '...#...' +
  '...#...' +
  '....#..' +
  '##...##' +
  '..#....' +
  '...#...' +
  '...#...'
);

const backwardRoundedCorners = pixelChunk(
  '...#...' +
  '...#...' +
  '..#....' +
  '##...##' +
  '....#..' +
  '...#...' +
  '...#...'
);

const topY = pixelChunk(
  '.......' +
  '.......' +
  '.......' +
  '##...##' +
  '..#.#..' +
  '...#...' +
  '...#...'
);

const bottomY = pixelChunk(
  '...#...' +
  '...#...' +
  '..#.#..' +
  '##...##' +
  '.......' +
  '.......' +
  '.......'
);

const leftY = pixelChunk(
  '...#...' +
  '...#...' +
  '....#..' +
  '.....##' +
  '....#..' +
  '...#...' +
  '...#...'
);

const rightY = pixelChunk(
  '...#...' +
  '...#...' +
  '..#....' +
  '##.....' +
  '..#....' +
  '...#...' +
  '...#...'
);

const horizontalLineDouble = pixelChunk(
  '.......' +
  '#######' +
  '.......' +
  '.......' +
  '.......' +
  '#######' +
  '.......'
);

const crossDouble = pixelChunk(
  '.#...#.' +
  '##...##' +
  '.......' +
  '.......' +
  '.......' +
  '##...##' +
  '.#...#.'
);

const verticalLineDouble = pixelChunk(
  '.#...#.' +
  '.#...#.' +
  '.#...#.' +
  '.#...#.' +
  '.#...#.' +
  '.#...#.' +
  '.#...#.'
);

const topRightCornerDouble = pixelChunk(
  '.......' +
  '.######' +
  '.#.....' +
  '.#.....' +
  '.#.....' +
  '.#...##' +
  '.#...#.'
);

const topLeftCornerDouble = pixelChunk(
  '.......' +
  '######.' +
  '.....#.' +
  '.....#.' +
  '.....#.' +
  '##...#.' +
  '.#...#.'
);

const bottomRightCornerDouble = pixelChunk(
  '.#...#.' +
  '##...#.' +
  '.....#.' +
  '.....#.' +
  '.....#.' +
  '######.' +
  '.......'
);

const bottomLeftCornerDouble = pixelChunk(
  '.#...#.' +
  '.#...##' +
  '.#.....' +
  '.#.....' +
  '.#.....' +
  '.######' +
  '.......'
);

const topTDouble = pixelChunk(
  '.......' +
  '#######' +
  '.......' +
  '.......' +
  '.......' +
  '##...##' +
  '.#...#.'
);

const bottomTDouble = pixelChunk(
  '.#...#.' +
  '##...##' +
  '.......' +
  '.......' +
  '.......' +
  '#######' +
  '.......'
);

const leftTDouble = pixelChunk(
  '.#...#.' +
  '.#...##' +
  '.#.....' +
  '.#.....' +
  '.#.....' +
  '.#...##' +
  '.#...#.'
);

const rightTDouble = pixelChunk(
  '.#...#.' +
  '##...#.' +
  '.....#.' +
  '.....#.' +
  '.....#.' +
  '##...#.' +
  '.#...#.'
);

const topTDoubleSingle = pixelChunk(
  '.......' +
  '#######' +
  '.......' +
  '.......' +
  '.......' +
  '#######' +
  '...#...'
);

const bottomTDoubleSingle = pixelChunk(
  '...#...' +
  '#######' +
  '.......' +
  '.......' +
  '.......' +
  '#######' +
  '.......'
);

const leftTDoubleSingle = pixelChunk(
  '.#...#.' +
  '.#...#.' +
  '.#...#.' +
  '.#...##' +
  '.#...#.' +
  '.#...#.' +
  '.#...#.'
);

const rightTDoubleSingle = pixelChunk(
  '.#...#.' +
  '.#...#.' +
  '.#...#.' +
  '##...#.' +
  '.#...#.' +
  '.#...#.' +
  '.#...#.'
);

const topTSingleDouble = pixelChunk(
  '.......' +
  '.......' +
  '.......' +
  '#######' +
  '.#...#.' +
  '.#...#.' +
  '.#...#.' 
);

const bottomTSingleDouble = pixelChunk(
  '.#...#.' +
  '.#...#.' +
  '.#...#.' +
  '#######' +
  '.......' +
  '.......' +
  '.......'
);

const leftTSingleDouble = pixelChunk(
  '...#...' +
  '...####' +
  '...#...' +
  '...#...' +
  '...#...' +
  '...####' +
  '...#...'
);

const rightTSingleDouble = pixelChunk(
  '...#...' +
  '####...' +
  '...#...' +
  '...#...' +
  '...#...' +
  '####...' +
  '...#...'
);
const topTSingleDoubleCross = pixelChunk(
  '...#...' +
  '...#...' +
  '...#...' +
  '#######' +
  '.#...#.' +
  '.#...#.' +
  '.#...#.' 
);

const bottomTSingleDoubleCross = pixelChunk(
  '.#...#.' +
  '.#...#.' +
  '.#...#.' +
  '#######' +
  '...#...' +
  '...#...' +
  '...#...'
);

const leftTSingleDoubleCross = pixelChunk(
  '...#...' +
  '...####' +
  '...#...' +
  '####...' +
  '...#...' +
  '...####' +
  '...#...'
);

const rightTSingleDoubleCross = pixelChunk(
  '...#...' +
  '####...' +
  '...#...' +
  '...####' +
  '...#...' +
  '####...' +
  '...#...'
);

const crossHDoubleSingle = pixelChunk(
  '...#...' +
  '#######' +
  '.......' +
  '.......' +
  '.......' +
  '#######' +
  '...#...'
);

const crossVDoubleSingle = pixelChunk(
  '.#...#.' +
  '.#...#.' +
  '.#...#.' +
  '##...##' +
  '.#...#.' +
  '.#...#.' +
  '.#...#.'
);

const crossHSingleDouble = pixelChunk(
  '.#...#.' +
  '.#...#.' +
  '.#...#.' +
  '#######' +
  '.#...#.' +
  '.#...#.' +
  '.#...#.'
);

const crossVSingleDouble = pixelChunk(
  '...#...' +
  '#######' +
  '...#...' +
  '...#...' +
  '...#...' +
  '#######' +
  '...#...'
);

const topRightCornerDoubleSingle = pixelChunk(
  '...#...' +
  '.######' +
  '.#.....' +
  '##.....' +
  '.#.....' +
  '.#...##' +
  '.#...#.'
);

const topLeftCornerDoubleSingle = pixelChunk(
  '...#...' +
  '######.' +
  '.....#.' +
  '.....##' +
  '.....#.' +
  '##...#.' +
  '.#...#.'
);

const bottomRightCornerDoubleSingle = pixelChunk(
  '.#...#.' +
  '##...#.' +
  '.....#.' +
  '.....##' +
  '.....#.' +
  '######.' +
  '...#...'
);

const bottomLeftCornerDoubleSingle = pixelChunk(
  '.#...#.' +
  '.#...##' +
  '.#.....' +
  '##.....' +
  '.#.....' +
  '.######' +
  '...#...'
);

const topRightCornerDoubleSingleH = pixelChunk(
  '.......' +
  '.######' +
  '.#.....' +
  '##.....' +
  '.#.....' +
  '.#...##' +
  '.#...#.'
);

const topLeftCornerDoubleSingleH = pixelChunk(
  '.......' +
  '######.' +
  '.....#.' +
  '.....##' +
  '.....#.' +
  '##...#.' +
  '.#...#.'
);

const bottomRightCornerDoubleSingleH = pixelChunk(
  '.#...#.' +
  '##...#.' +
  '.....#.' +
  '.....##' +
  '.....#.' +
  '######.' +
  '.......'
);

const bottomLeftCornerDoubleSingleH = pixelChunk(
  '.#...#.' +
  '.#...##' +
  '.#.....' +
  '##.....' +
  '.#.....' +
  '.######' +
  '.......'
);

const topRightCornerDoubleSingleV = pixelChunk(
  '...#...' +
  '.######' +
  '.#.....' +
  '.#.....' +
  '.#.....' +
  '.#...##' +
  '.#...#.'
);

const topLeftCornerDoubleSingleV = pixelChunk(
  '...#...' +
  '######.' +
  '.....#.' +
  '.....#.' +
  '.....#.' +
  '##...#.' +
  '.#...#.'
);

const bottomRightCornerDoubleSingleV = pixelChunk(
  '.#...#.' +
  '##...#.' +
  '.....#.' +
  '.....#.' +
  '.....#.' +
  '######.' +
  '...#...'
);

const bottomLeftCornerDoubleSingleV = pixelChunk(
  '.#...#.' +
  '.#...##' +
  '.#.....' +
  '.#.....' +
  '.#.....' +
  '.######' +
  '...#...'
);

const horizontalDoubleToSingle = pixelChunk(
  '.......' +
  '####...' +
  '...#...' +
  '...####' +
  '...#...' +
  '####...' +
  '.......'
);

const horizontalSingleToDouble = pixelChunk(
  '.......' +
  '...####' +
  '...#...' +
  '####...' +
  '...#...' +
  '...####' +
  '.......'
);

const verticalDoubleToSingle = pixelChunk(
  '.#...#.' +
  '.#...#.' +
  '.#...#.' +
  `.#####.` +
  '...#...' +
  '...#...' +
  '...#...'
);

const verticalSingleToDouble = pixelChunk(
  '...#...' +
  '...#...' +
  '...#...' +
  `.#####.` +
  '.#...#.' +
  '.#...#.' +
  '.#...#.'
);

const horizontalDoubleToNone= pixelChunk(
  '.......' +
  '####...' +
  '...#...' +
  '...#...' +
  '...#...' +
  '####...' +
  '.......'
);

const horizontalNoneToDouble = pixelChunk(
  '.......' +
  '...####' +
  '...#...' +
  '...#...' +
  '...#...' +
  '...####' +
  '.......'
);

const verticalDoubleToNone = pixelChunk(
  '.#...#.' +
  '.#...#.' +
  '.#...#.' +
  `.#####.` +
  '.......' +
  '.......' +
  '.......'
);

const verticalNoneToDouble = pixelChunk(
  '.......' +
  '.......' +
  '.......' +
  `.#####.` +
  '.#...#.' +
  '.#...#.' +
  '.#...#.'
);


const outputs = [
  blank,
  horizontalLine,
  cross,
  verticalLine,
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
  forwardRoundedCorners,
  backwardRoundedCorners,
  topY,
  bottomY,
  leftY,
  rightY,
  horizontalLineDouble,
  crossDouble,
  verticalLineDouble,
  topRightCornerDouble,
  topLeftCornerDouble,
  bottomRightCornerDouble,
  bottomLeftCornerDouble,
  topTDouble,
  bottomTDouble,
  leftTDouble,
  rightTDouble,
  topTDoubleSingle,
  bottomTDoubleSingle,
  leftTDoubleSingle,
  rightTDoubleSingle,
  topTSingleDouble,
  bottomTSingleDouble,
  leftTSingleDouble,
  rightTSingleDouble,
  topTSingleDoubleCross,
  bottomTSingleDoubleCross,
  leftTSingleDoubleCross,
  rightTSingleDoubleCross,
  crossHDoubleSingle,
  crossVDoubleSingle,
  crossHSingleDouble,
  crossVSingleDouble,
  topRightCornerDoubleSingle,
  topLeftCornerDoubleSingle,
  bottomRightCornerDoubleSingle,
  bottomLeftCornerDoubleSingle,
  topRightCornerDoubleSingleH,
  topLeftCornerDoubleSingleH,
  bottomRightCornerDoubleSingleH,
  bottomLeftCornerDoubleSingleH,
  topRightCornerDoubleSingleV,
  topLeftCornerDoubleSingleV,
  bottomRightCornerDoubleSingleV,
  bottomLeftCornerDoubleSingleV,
  horizontalDoubleToSingle,
  horizontalSingleToDouble,
  verticalDoubleToSingle,
  verticalSingleToDouble,
  horizontalDoubleToNone,
  horizontalNoneToDouble,
  verticalDoubleToNone,
  verticalNoneToDouble
];

module.exports = {
  pixelChunk,
  outputs,
}
