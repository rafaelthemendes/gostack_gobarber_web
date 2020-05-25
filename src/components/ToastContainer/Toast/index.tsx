import React, { useEffect } from 'react';
import { ToastMessage, useToast } from '../../../hooks/toast';
import { Container } from './styles';
import { FiAlertCircle, FiXCircle, FiCheckCircle } from 'react-icons/fi';

interface ToastProps {
  message: ToastMessage;
  style: object;
}

const icons = {
  info: <FiAlertCircle size={20} />,
  success: <FiCheckCircle size={20} />,
  error: <FiAlertCircle size={20} />,
};

const Toast: React.FC<ToastProps> = ({ message, style }) => {
  const { removeToast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(message.id);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [message.id, removeToast]);

  const { id, type, description, title } = message;
  return (
    <Container type={type} hasDescription={!!description} style={style}>
      {icons[type]}
      <div>
        <strong>{title}</strong>
        {description && <p>{description}</p>}
      </div>
      <button onClick={() => removeToast(id)} type="button">
        <FiXCircle size={18} />
      </button>
    </Container>
  );
};

export default Toast;
