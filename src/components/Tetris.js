import React from 'react';

import Stage from './Stage';
import Display from './Display';
import Button from './Button';

import { StyledTetris, StyledTetrisWrapper } from './styles/StyledTetris';

import { createStage } from '../utils/game-helpers';

const Tetris = () => {
  console.log(createStage);

  return (
    <StyledTetrisWrapper>
      <StyledTetris>
        <Stage stage={createStage()} />
        <aside>
          <div>
            <Display text="Level" />
            <Display text="Score" />
            <Display text="Lines broken" />
          </div>
          <Button text="Let's start" />
        </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
  );
}

export default Tetris;
