import React from 'react';

import { StyledCell } from './styles/StyledCell';
import { ALL_TETROMINOS } from '../utils/tetrominos';

const Cell = ({ type }) =>
  <StyledCell 
    type={type} 
    color={ALL_TETROMINOS[type].color} 
  />;
  

export default React.memo(Cell);
