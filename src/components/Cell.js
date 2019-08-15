import React from 'react';

import { StyledCell } from './styles/StyledCell';

import { TETROMINOS } from '../utils/tetrominos';

const Cell = ({ type }) => (
  <StyledCell type={'L'} color={TETROMINOS['L'].color} />
);

export default Cell;
