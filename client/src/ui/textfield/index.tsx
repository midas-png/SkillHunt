import { useState, FC, ChangeEvent } from 'react';
import { IProps } from './props';
import { TextfieldComponent } from './styles';

export const Textfield: FC<IProps> = ({
  defaultValue,
  variant,
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
    <TextfieldComponent
      value={innerValue}
      variant={variant}
      placeholder={placeholder}
      type={type}
      onChange={handleChange}
      {...rest}
    />
  );
};
