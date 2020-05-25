import React from 'react';
import { ToastMessage } from '../../hooks/toast';
import { Container } from './styles';
import Toast from './Toast';
import { useTransition } from 'react-spring';

interface ToastContainerProps {
  messages: ToastMessage[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
  const messagesWithTransition = useTransition(
    messages,
    (message) => message.id,
    {
      from: { right: '-120%', opacity: 0 },
      enter: { right: '0%', opacity: 1 },
      leave: { right: '-120%', opacity: 0 },
    }
  );

  return (
    <Container>
      {messagesWithTransition.map(({ item: message, key, props }) => (
        <Toast key={key} message={message} style={props} />
      ))}
    </Container>
  );
};

export default ToastContainer;
