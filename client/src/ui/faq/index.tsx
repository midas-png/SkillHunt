import { FC } from 'react';
import { IProps } from './props';
import {
  ComponentWrapper,
  FaqWrapper,
  FaqQuestion,
  FaqArrow,
  AnswerWrapper,
  Answer,
} from './styles';
import { useToggle } from 'features';

export const Faq: FC<IProps> = ({ question, children }) => {
  const [open, toggleOpen] = useToggle();

  return (
    <ComponentWrapper>
      <FaqWrapper onClick={toggleOpen}>
        <FaqQuestion>{question}</FaqQuestion>
        <FaqArrow open={open} />
      </FaqWrapper>
      <AnswerWrapper open={open}>
        <Answer open={open}>{children}</Answer>
      </AnswerWrapper>
    </ComponentWrapper>
  );
};
