import React from 'react';

import { StyledStage } from './styles/StyledStage';
import Cell from './Cell';

const Stage = ({ stage }) => (
  <StyledStage width={stage[0].length} height={stage.length}>
    {stage.map(rows => rows.map((cell, i) => <Cell key={i} type={cell[0]} />))}
  </StyledStage>
);

export default Stage;
