import { useState, FC } from 'react';
import { FiltersWrapper } from './styles';
import {
  initialFilters,
  IFilters,
  TYPES_OF_WORK_PLACE,
  SPECIALIST_LEVEL,
  TYPES_OF_EMPLOYMENT,
} from './data';
import { Button, Title, Textfield, Select, Range } from 'ui';

export const Filters: FC = () => {
  const [filtersValues, setFilters] = useState<IFilters>(initialFilters);

  const handleRange = (type: 'min' | 'max', value: number | null): void => {
    if (type === 'min') {
      setFilters({
        ...filtersValues,
        experience: {
          ...filtersValues.experience,
          min: value,
        },
      });
    } else {
      setFilters({
        ...filtersValues,
        experience: {
          ...filtersValues.experience,
          max: value,
        },
      });
    }
  };

  return (
    <FiltersWrapper>
      <Title variant='h4'>Filters</Title>
      <Range
        label='Experience'
        maxLength={2}
        onChangeMin={(value) => handleRange('min', value)}
        onChangeMax={(value) => handleRange('max', value)}
      />
      <Textfield
        label='location'
        placeholder='Location'
        onChange={(e) =>
          setFilters({ ...filtersValues, location: e.target.value })
        }
      />
      <Select
        label='Job format'
        options={TYPES_OF_WORK_PLACE}
        onChange={(value) => setFilters({ ...filtersValues, jobFormat: value })}
      />
      <Select
        label='Level'
        options={SPECIALIST_LEVEL}
        onChange={(value) => setFilters({ ...filtersValues, level: value })}
      />
      <Select
        label='Type of employment'
        options={TYPES_OF_EMPLOYMENT}
        onChange={(value) =>
          setFilters({ ...filtersValues, employmentType: value })
        }
      />
      <Button size='small' variant='secondary'>
        Apply
      </Button>
    </FiltersWrapper>
  );
};
