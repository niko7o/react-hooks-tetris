import React from 'react';

import Stage from './Stage';
import Display from './Display';
import Button from './Button';

const Tetris = () => (
  <>
    <Stage />
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
