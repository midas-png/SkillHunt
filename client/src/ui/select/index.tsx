import { useState, useRef, FC } from 'react';
import {
  ComponentWrapper,
  SelectWrapper,
  SelectHeader,
  SelectHeaderWrapper,
  SelectArrow,
  SelectListWrapper,
  SelectList,
  SelectItem,
  SelectLabel,
} from './styles';
import { IProps } from './props';
import { useToggle, useOutsideClick } from 'features';

export const Select: FC<IProps> = ({
  options,
  label,
  defaultSelected,
  onChange,
}) => {
  const [open, toggleOpen] = useToggle(false);
  const [selected, setSelected] = useState(() => {
    if (defaultSelected) return defaultSelected;
    else if ((options || []).length !== 0) return options[0];
    return null;
  });
  const selectRef = useRef<HTMLInputElement>(null);

  const handleSelectClick = (value: string) => () => {
    setSelected(value);
    if (typeof onChange === 'function') {
      onChange(value);
    }
    toggleOpen();
  };

  const handleClickOutside = (): void => {
    if (open) toggleOpen();
  };

  useOutsideClick(selectRef, handleClickOutside);

  return (
    <ComponentWrapper>
      {label && <SelectLabel>{label}</SelectLabel>}
      <SelectWrapper ref={selectRef}>
        <SelectHeaderWrapper onClick={toggleOpen}>
          <SelectHeader>{selected}</SelectHeader>
          <SelectArrow open={open} />
        </SelectHeaderWrapper>
        <SelectListWrapper>
          <SelectList open={open}>
            {options.map((item) => (
              <SelectItem
                open={open}
                onClick={handleSelectClick(item)}
                key={Math.random()}>
                {item}
              </SelectItem>
            ))}
          </SelectList>
        </SelectListWrapper>
      </SelectWrapper>
    </ComponentWrapper>
  );
};
