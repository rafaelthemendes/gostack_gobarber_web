import React, {
  InputHTMLAttributes,
  useRef,
  useEffect,
  useState,
  useCallback,
} from 'react';
import { IconBaseProps } from 'react-icons';
import { Container } from './styles';
import { useField } from '@unform/core';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({ name, icon: Icon, ...inputProps }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { registerField, fieldName } = useField(name);
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
    <Container isFocused={isFocused}>
      {Icon && <Icon color={isFillet ? '#ff9000' : '#666360'} />}
      <input
        ref={inputRef}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        {...inputProps}
      />
    </Container>
  );
};

export default Input;
