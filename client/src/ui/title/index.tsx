import { FC } from 'react';
import { IProps } from './props';
import { TitleComponent } from './styles';

export const Title: FC<IProps> = ({
  variant,
  weight,
  fontSize,
  textAlign,
  light,
  letterSpacing,
  children,
}) => (
  <TitleComponent
    variant={variant}
    weight={weight}
    fontSize={fontSize}
    textAlign={textAlign}
    letterSpacing={letterSpacing}
    light={light}>
    {children}
  </TitleComponent>
);
