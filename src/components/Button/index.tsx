import React, { ButtonHTMLAttributes } from 'react';
import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ children, ...buttonProps }) => (
  <Container type="button" {...buttonProps}>
    {children}
  </Container>
);

export default Button;
