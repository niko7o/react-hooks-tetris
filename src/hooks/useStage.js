import { useState, useEffect } from 'react';
import { createStage } from '../utils/stage';

export const useStage = (player, resetPlayer) => {
  const [stage, setStage] = useState(createStage());

  useEffect(() => {
    const updateStage = prevStage => {
      // Flush the previous stage
      const newStage = prevStage.map(row =>
        row.map(cell => (cell[1] === 'clear' ? [0, 'clear'] : cell))
      );

      // Draw the tetromino
      player.tetromino.forEach((row, y) => {
        row.forEach((value, x) => {
          if (value !== 0) {
            newStage[y + player.pos.y][x + player.pos.x] = [
              value,
              `${player.collided ? 'merged' : 'clear'}`,
            ];
          }
        });
      });

      return newStage;
    };

    // Update the stage
    setStage(prev => updateStage(prev));
  }, [
    player.collided,
    player.pos.x, 
    player.pos.y, 
    player.tetromino,
    resetPlayer
  ]);

  return [stage, setStage];
};
