import React from 'react';

import Stage from './Stage';
import Display from './Display';
import Button from './Button';

import { createStage } from '../utils/game-helpers';

const Tetris = () => (
  <>
    <Stage stage={createStage()} />
    <aside>
      <>
        <Display text="Score" />
        <Display text="Rows" />
        <Display text="Level" />
      </>
      <Button text="Start" />
    </aside>
  </>
);

export default Tetris;
