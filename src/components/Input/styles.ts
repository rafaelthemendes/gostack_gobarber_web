import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #232129;
  display: flex;
  align-items: center;
  border-radius: 10px;
  padding: 16px;
  width: 100%;

  border: 2px solid #232129;
  color: #666360;

  ${(props) =>
    props.isFocused &&
    css`
      border-color: #ff9000;
      color: #ff9000;
    `}

  & + div {
    margin-top: 8px;
  }

  input {
    background: transparent;
    flex: 1;
    border: 0;
    margin-left: 16px;
    color: #f4ede8;

    &::placeholder {
      color: #666360;
    }
  }
`;
