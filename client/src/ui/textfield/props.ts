/* eslint-disable no-unused-vars */
import { FormEvent } from 'react';

export interface IProps {
  defaultValue?: string | number | readonly string[] | undefined;
  placeholder?: string;
  onChange?: (e: FormEvent<HTMLInputElement>) => void;
}
