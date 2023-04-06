import { ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'tertiary' | 'quaternary' | 'quinary';
type Size = 'small' | 'medium' | 'large' | 'full' | 'square';

export interface IProps {
  children?: ReactNode;
  variant?: Variant;
  size?: Size;
  loading?: boolean;
  disableShadow?: boolean;
  onClick?: () => void;
}
