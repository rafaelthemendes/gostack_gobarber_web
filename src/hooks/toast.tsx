import React, { createContext, useCallback, useContext, useState } from 'react';
import ToastContainer from '../components/ToastContainer';
import { uuid } from 'uuidv4';

export interface ToastMessage {
  id: string;
  type: 'info' | 'success' | 'error';
  title: string;
  description?: string;
}

interface ToastContextData {
  addToast(data: Omit<ToastMessage, 'id'>): void;
  removeToast(id: string): void;
}

const ToastContext = createContext({} as ToastContextData);

export const ToastContextProvider: React.FC = ({ children }) => {
  const [messages, setMessages] = useState<ToastMessage[]>([]);

  const addToast = useCallback((toast: Omit<ToastMessage, 'id'>) => {
    const id = uuid();
    const message = {
      id,
      ...toast,
    };
    setMessages((oldMessages) => [...oldMessages, message]);
  }, []);

  const removeToast = useCallback((id) => {
    setMessages((oldMessages) =>
      oldMessages.filter((message) => message.id !== id)
    );
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer messages={messages} />
    </ToastContext.Provider>
  );
};

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
}
