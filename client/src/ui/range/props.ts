/* eslint-disable no-unused-vars */
export interface IProps {
  label: string;
  maxLength?: number;
  onChangeMin?: (value: number | null) => void;
  onChangeMax?: (value: number | null) => void;
}
