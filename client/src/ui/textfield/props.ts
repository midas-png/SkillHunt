/* eslint-disable no-unused-vars */
import { ChangeEvent, InputHTMLAttributes } from 'react';

type Variant = 'primary' | 'secondary';
type Size = 'medium' | 'large' | 'full';

export interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  defaultValue?: string | number | readonly string[] | undefined;
  variant?: Variant;
  label?: string;
  type?: string;
  extent?: Size;
  error?: string;
  placeholder?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}
