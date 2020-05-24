import styled from 'styled-components';

export const Container = styled.div`
  background: #232129;
  display: flex;
  align-items: center;
  border-radius: 10px;
  border: 2px solid #232129;
  color: #666360;
  padding: 16px;
  width: 100%;

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
