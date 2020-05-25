import React, { createContext, useCallback, useContext } from 'react';
import ToastContainer from '../components/ToastContainer';

interface ToastContextData {
  addToast(): void;
  removeToast(): void;
}

const ToastContext = createContext({} as ToastContextData);

export const ToastContextProvider: React.FC = ({ children }) => {
  const addToast = useCallback(() => {
    // TODO:
  }, []);
  const removeToast = useCallback(() => {
    // TODO:
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer />
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
