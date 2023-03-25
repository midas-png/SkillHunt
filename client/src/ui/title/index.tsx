import { FC } from 'react';
import { IProps } from './props';
import { TitleComponent } from './styles';

export const Title: FC<IProps> = ({
  variant,
  weight,
  fontSize,
  textAlign,
  light,
  children,
}) => (
  <TitleComponent
    variant={variant}
    weight={weight}
    fontSize={fontSize}
    textAlign={textAlign}
    light={light}>
    {children}
  </TitleComponent>
);
