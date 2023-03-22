import { ReactNode } from 'react';

type Variant = 'primary' | 'secondary';
type Size = 'small' | 'medium' | 'large' | 'full';

export interface IProps {
  children?: ReactNode;
  variant?: Variant;
  size?: Size;
  loading?: boolean;
  disableShadow?: boolean;
  onClick?: () => void;
}
