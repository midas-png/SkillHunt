/* eslint-disable no-unused-vars */
import { ChangeEvent, InputHTMLAttributes } from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';

type Variant = 'primary' | 'secondary';

export interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  defaultValue?: string | number | readonly string[] | undefined;
  variant?: Variant;
  type?: string;
  placeholder?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}
