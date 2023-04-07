import { useState, FC, ChangeEvent } from 'react';
import { IProps } from './props';
import { ComponentWrapper, TextfieldComponent, ErrorMessage } from './styles';

export const Textfield: FC<IProps> = ({
  defaultValue,
  variant,
  error,
  placeholder,
  type,
  onChange,
  ...rest
}) => {
  const [innerValue, setInnerValue] = useState(defaultValue || '');

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    onChange && onChange(e);
    setInnerValue(e.target.value);
  };

  return (
    <ComponentWrapper>
      <TextfieldComponent
        value={innerValue}
        variant={variant}
        placeholder={placeholder}
        type={type}
        error={error}
        onChange={handleChange}
        {...rest}
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </ComponentWrapper>
  );
};
