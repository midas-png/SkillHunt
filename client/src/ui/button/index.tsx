import { FC } from 'react';
import { ButtonComponent, SpinLoader } from './styles';
import { IProps } from './props';

export const Button: FC<IProps> = ({
  variant,
  size,
  loading,
  children,
  onClick,
}) => {
  return (
    <ButtonComponent
      variant={variant}
      size={size}
      disabled={loading || false}
      onClick={onClick}>
      {loading ? <SpinLoader /> : children}
    </ButtonComponent>
  );
};
