/* eslint-disable no-unused-vars */
import { ChangeEvent } from 'react';

type Variant = 'primary' | 'secondary';

export interface IProps {
  defaultValue?: string | number | readonly string[] | undefined;
  variant?: Variant;
  placeholder?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}
