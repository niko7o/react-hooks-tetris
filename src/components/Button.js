import React from 'react';

import { StyledButton } from './styles/StyledButton';

const Button = ({ onClickAction, text }) => (
  <StyledButton onClick={onClickAction}>
    {text}
  </StyledButton>
);

export default Button;
