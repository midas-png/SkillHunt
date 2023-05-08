/* eslint-disable no-unused-vars */
import { ReactNode } from 'react';

export interface IProps {
  options: Array<string>;
  label?: ReactNode;
  defaultSelected?: string;
  onChange?: (option: string) => void;
}
