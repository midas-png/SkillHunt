import { FC } from 'react';
import { ButtonComponent, SpinLoader } from './styles';
import { IProps } from './props';

export const Button: FC<IProps> = ({
  variant,
  size,
  shadow,
  loading,
  children,
  onClick,
}) => {
  return (
    <ButtonComponent
      variant={variant}
      size={size}
      shadow={shadow}
      disabled={loading || false}
      onClick={onClick}>
      {loading ? <SpinLoader /> : children}
    </ButtonComponent>
  );
};
