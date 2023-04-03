import { FC } from 'react';
import { ComponentWrapper, FaqsWrapper } from './styles';
import { FAQS } from './data';
import { Title, Faq } from 'ui';

export const FAQs: FC = () => (
  <ComponentWrapper>
    <Title variant='h2' light>
      FAQs
    </Title>
    <FaqsWrapper>
      {FAQS.map((faq) => (
        <Faq key={faq.question} question={faq.question}>
          {faq.answer}
        </Faq>
      ))}
    </FaqsWrapper>
  </ComponentWrapper>
);
