import { useState, FC, ChangeEvent } from 'react';
import { RangeWrapper, TextifeldsWrapper, RangeLabel } from './styles';
import { IProps } from './props';
import { Textfield } from 'ui';

interface IRange {
  min: number | null;
  max: number | null;
}

export const Range: FC<IProps> = ({
  label,
  maxLength = 7,
  onChangeMin,
  onChangeMax,
}) => {
  const [range, setRange] = useState<IRange>({
    min: null,
    max: null,
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement>,
    type: string
  ): void => {
    let value = Number(e.target.value);
    if (isNaN(value) || e.target.value.length > maxLength) return;

    if (type === 'min') {
      setRange({ ...range, min: value });
      onChangeMin && onChangeMin(value);
    } else {
      if (range.min && value && range.min > value) {
        value = range.min;
      }
      setRange({ ...range, max: value });
      onChangeMax && onChangeMax(value);
    }
  };

  return (
    <RangeWrapper>
      <RangeLabel>{label}</RangeLabel>
      <TextifeldsWrapper>
        <Textfield
          placeholder='Min'
          value={range.min || ''}
          onChange={(e) => handleChange(e, 'min')}
        />
        <Textfield
          placeholder='Max'
          value={range.max || ''}
          onChange={(e) => handleChange(e, 'max')}
        />
      </TextifeldsWrapper>
    </RangeWrapper>
  );
};
