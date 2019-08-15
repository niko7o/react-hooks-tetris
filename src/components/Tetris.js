import React, { useState } from 'react';

// Components
import Stage from './Stage';
import Display from './Display';
import Button from './Button';

// Styled components
import { StyledTetris, StyledTetrisWrapper } from './styles/StyledTetris';

// Hooks
import { usePlayer } from '../hooks/usePlayer';
import { useStage } from '../hooks/useStage';

// Utils
import { createStage } from '../utils/game-helpers';

const Tetris = () => {
  const [dropTime, setDroptime] = useState(null);
  const [gameover, setGameover] = useState(false);

  const [player, updatePlayerPos, resetPlayer] = usePlayer();
  const [stage, setStage] = useStage(player);

  const movePlayer = dir => {
    updatePlayerPos({ x: dir, y: 0 });
  }

  const startGame = () => {
    console.log('Starting Game')
    setStage(createStage());
    resetPlayer();
  }

  const drop = () => {
    updatePlayerPos({ 
      x: 0, 
      y: 1, 
      collided: false 
    })
  }

  const dropPlayer = () => {
    drop();
  }

  const move = ({ keyCode: key }) => {
    if (!gameover) {
      switch (key) {
        case 37: movePlayer(-1); // Left
        case 39: movePlayer(1); // Right
        case 40: dropPlayer(); // Down
      }
    }
  }

  console.log('Tetris re-renders');

  /* 
   * Our StyledTetrisWrapper is responsible for handling all the
   * keyboard events. Without this component, the user would have
   * to click inside the div once for his keys to be registered.
  */ 

  return (
    <StyledTetrisWrapper role="button" tabIndex="0" onKeyDown={e => move(e)}>
      <StyledTetris>
        <Stage stage={createStage()} />
        <aside>
          {gameover
          ? <Display gameover={gameover} text="Game over" />
          : <div>
            <Display text="Level" />
            <Display text="Score" />
            <Display text="Lines broken" />
          </div>
          }
          <Button text="Let's start" onClickAction={startGame}/>
        </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
  );
}

export default Tetris;
