import React from 'react';

import Stage from './Stage';
import Display from './Display';
import Button from './Button';

import { StyledTetris, StyledTetrisWrapper } from './styles/StyledTetris';

import { createStage } from '../utils/game-helpers';

const Tetris = () => (
  <StyledTetrisWrapper>
    <StyledTetris>
      <Stage stage={createStage()} />
      <aside>
        <div>
          <Display text="Score" />
          <Display text="Rows" />
          <Display text="Level" />
        </div>
        <Button text="Start" />
      </aside>
    </StyledTetris>
  </StyledTetrisWrapper>
);

export default Tetris;
