/* eslint-disable no-unused-vars */
import { ChangeEvent, InputHTMLAttributes } from 'react';

type Variant = 'primary' | 'secondary';

export interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  defaultValue?: string | number | readonly string[] | undefined;
  variant?: Variant;
  type?: string;
  error?: string;
  placeholder?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}
