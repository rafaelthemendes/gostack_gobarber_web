import React, {
  InputHTMLAttributes,
  useRef,
  useEffect,
  useState,
  useCallback,
} from 'react';
import { IconBaseProps } from 'react-icons';
import { Container, Error } from './styles';
import { useField } from '@unform/core';
import { FiAlertCircle } from 'react-icons/fi';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({ name, icon: Icon, ...inputProps }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { registerField, fieldName, error } = useField(name);
  const [isFocused, setIsFocused] = useState(false);
  const [isFillet, setIsFillet] = useState(false);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [registerField, fieldName]);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
    setIsFillet(!!inputRef.current?.value);
  }, []);

  return (
    <Container isFocused={isFocused} isFilled={isFillet} hasError={!!error}>
      {Icon && <Icon size={20} />}
      <input
        ref={inputRef}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        {...inputProps}
      />
      {error && (
        <Error title={error}>
          <FiAlertCircle size={20} color="#c53030" />
        </Error>
      )}
    </Container>
  );
};

export default Input;
