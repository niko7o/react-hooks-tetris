import { useState, useCallback } from 'react';

import { STAGE_WIDTH, checkCollision } from '../utils/stage';
import { ALL_TETROMINOS, randomTetromino } from '../utils/tetrominos';

export const usePlayer = () => {
  /* 
   * Assign an empty tetromino shape as default before it is generated
   */
  const [player, setPlayer] = useState({
    pos: { x: 0, y: 0 },
    tetromino: ALL_TETROMINOS[0].shape,
    collided: false,
  });

  const rotate = (matrix, direction) => {
    const rotatedTetromino = matrix.map((_, index) => 
      matrix.map(column => column[index])
    );

    if (direction > 0) {
      return rotatedTetromino.map(row => row.reverse());
    }

    return rotatedTetromino.reverse();
  }

  const playerRotate = (stage, direction) => {
    const clonedPlayer = JSON.parse(JSON.stringify(player));
    clonedPlayer.tetromino = rotate(clonedPlayer.tetromino, direction);

    const pos = clonedPlayer.pos.x;
    let offset = 1;
    
    while (checkCollision(clonedPlayer, stage, { x: 0, y: 0 })) {
      clonedPlayer.pos.x += offset;
      offset = -(offset + (offset > 0 ? 1 : -1));
      if (offset > clonedPlayer.tetromino[0].length) {
        rotate(clonedPlayer.tetromino, -direction);
        clonedPlayer.pos.x = pos;
        return;
      }
    }

    setPlayer(clonedPlayer);
  }

  const updatePlayerPos = ({ x, y, collided }) => {
    setPlayer(prev => ({
      ...prev,
      pos: { 
        x: (prev.pos.x += x), 
        y: (prev.pos.y += y) 
      },
      collided
    }));
  };

  const resetPlayer = useCallback(() => {
    setPlayer({
      pos: { 
        x: STAGE_WIDTH / 2 - 2, 
        y: 0 
      },
      tetromino: randomTetromino().shape,
      collided: false,
    });
  }, []);

  return [player, updatePlayerPos, resetPlayer, playerRotate];
};
