import React from 'react';

import { StyledButton } from './styles/StyledButton';

const Button = ({ callback, text }) => (
  <StyledButton>
    {text}
  </StyledButton>
);

export default Button;
