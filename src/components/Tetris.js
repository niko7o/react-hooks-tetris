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
import { useInterval } from '../hooks/useInterval';

// Utils
import { createStage, checkCollision } from '../utils/stage';

const Tetris = () => {
  const [dropTime, setDroptime] = useState(null);
  const [gameover, setGameover] = useState(false);

  const [player, updatePlayerPos, resetPlayer, playerRotate] = usePlayer();
  const [stage, setStage] = useStage(player, resetPlayer);

  const movePlayer = direction => {
    if(!checkCollision(player, stage, { x: direction, y: 0 })) {
      updatePlayerPos({ x: direction, y: 0 });
    }
  }

  const startGame = () => {
    setStage(createStage());
    setGameover(false);
    setDroptime(500);
    resetPlayer();
  }

  const drop = () => {
    if (!checkCollision(player, stage, { x: 0, y: 1 })) {
      updatePlayerPos({ x: 0, y: 1, collided: false });
    } else {
      if(player.pos.y < 1) {
        setGameover(true);
        setDroptime(null);
      }
      updatePlayerPos({ x: 0, y: 0, collided: true });
    }
  }

  const dropPlayer = () => {
    drop();
  }

  const move = ({ keyCode: key }) => {
    if (!gameover) {
      if (key === 37) movePlayer(-1);
      else if (key === 82) playerRotate(stage, 1);
      else if (key === 39) movePlayer(1);
      else if (key === 40) dropPlayer();
    }
  }

  useInterval(() => {
    drop();
  }, dropTime);

  /* 
   * Our StyledTetrisWrapper is responsible for handling all the
   * keyboard events. Without this component, the user would have
   * to click inside the div once for his keys to be registered.
  */ 

  return (
    <StyledTetrisWrapper 
      role="button" 
      tabIndex="0" 
      onKeyDown={e => move(e)}
    >
      <StyledTetris>
      <aside>
          {gameover
          ? <Display gameover={gameover} text="Game over" />
          : <div>
              <Display text="Level" />
              <Display text="Score" />
              <Display text="Lines broken" />
            </div>
          }
          <Button text="Play Tetris" action={startGame}/>
        </aside>
        <Stage stage={stage} />
      </StyledTetris>
    </StyledTetrisWrapper>
  );
}

export default Tetris;
