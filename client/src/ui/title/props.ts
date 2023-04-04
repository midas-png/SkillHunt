import { ReactNode } from 'react';

type Variant = 'h1' | 'h2' | 'h3' | 'h4';
type Weight = 'bold' | 'medium';
type Align = 'start' | 'center' | 'end' | 'justify';

export interface IProps {
  variant?: Variant;
  weight?: Weight;
  fontSize?: number;
  textAlign?: Align;
  light?: boolean;
  letterSpacing?: number;
  children?: ReactNode;
}
