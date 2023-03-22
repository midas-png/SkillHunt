import { ReactNode } from 'react';

type Variant = 'primary' | 'secondary';
type Size = 'small' | 'medium' | 'large' | 'full';
type Shadow = 'primary' | 'secondary' | 'tertiary';

export interface IProps {
  children?: ReactNode;
  variant?: Variant;
  shadow?: Shadow;
  size?: Size;
  loading?: boolean;
  onClick?: () => void;
}
