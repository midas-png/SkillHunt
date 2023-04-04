import { FC } from 'react';
import { ButtonComponent, SpinLoader } from './styles';
import { IProps } from './props';

export const Button: FC<IProps> = ({
  variant,
  size,
  loading,
  disableShadow,
  children,
  onClick,
}) => {
  children = size === 'square' ? '+' : children;

  return (
    <ButtonComponent
      variant={variant}
      size={size}
      disableShadow={disableShadow}
      disabled={loading || false}
      onClick={onClick}>
      {loading ? <SpinLoader /> : children}
    </ButtonComponent>
  );
};
