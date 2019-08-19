/*
 * For each row (STAGE_WIDTH -> 20), create 12 cells
 * and fill them up with the cell states 0 or 'clear'
 */
export const createStage = () =>
  Array.from(Array(STAGE_HEIGHT), () =>
    new Array(STAGE_WIDTH).fill([0, 'clear']));

export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

export const checkCollision = (player, stage, { x: moveX, y: moveY }) => {
  for (let y = 0; y < player.tetromino.length; y += 1) {
    for (let x = 0; x < player.tetromino[y].length; x += 1) {
      if (player.tetromino[y][x] !== 0) {
        if (
          !stage[y + player.pos.y + moveY] ||
          !stage[y + player.pos.y + moveY][x + player.pos.x + moveX] ||
          stage[y + player.pos.y + moveY][x + player.pos.x + moveX][1] !== 'clear'
        ) {
          return true;
        }
      }
    }
  }
  return false;
}
