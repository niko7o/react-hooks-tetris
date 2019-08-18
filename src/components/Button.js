import React from 'react';

import { StyledButton } from './styles/StyledButton';

const Button = ({ action, text }) => (
  <StyledButton onClick={action}>
    {text}
  </StyledButton>
);

export default Button;
