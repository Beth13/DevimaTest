/* eslint-disable react/prop-types */

import { useState } from 'react';
import useDebouncedCallback from '../../../hooks/useDebouncedCallback';

const Input = ({ value, onChange, type = 'text', placeholder = 'Search...', setIsLoading }) => {
  const [innerValue, setInnerValue] = useState(() => value || '');

  const handleOnUpdate = useDebouncedCallback(value => {
    onChange?.(value);
    setIsLoading(false);
  }, 1000);

  const handleOnChange = event => {
    setIsLoading(true);
    const inputValue = event.target.value;

    setInnerValue(inputValue);
    handleOnUpdate(inputValue);
  };

  return (
    <input
      className="input"
      type={type}
      placeholder={placeholder}
      value={innerValue}
      onChange={handleOnChange}
    />
  );
};

export default Input;
