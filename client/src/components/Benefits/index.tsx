import {
  BenefitsWrapper,
  BenefitsHeaderWrapper,
  BenefitsCardsWrapper,
  BenefitCardWrapper,
  BenefitCardSubtitle,
} from './styles';
import { BENEFITS } from './data';
import { Title, Button } from 'ui';

export const Benefits = () => (
  <BenefitsWrapper>
    <BenefitsHeaderWrapper>
      <Title variant='h1' light>
        Your new way
        <br />
        to be hired.
      </Title>
      <Button variant='tertiary' size='large' disableShadow>
        Get started free
      </Button>
    </BenefitsHeaderWrapper>
    <BenefitsCardsWrapper>
      {BENEFITS.map(({ title, subTitle, Icon }) => (
        <BenefitCardWrapper key={title}>
          <Icon />
          <Title variant='h3' light>
            {title}
          </Title>
          <BenefitCardSubtitle>{subTitle}</BenefitCardSubtitle>
        </BenefitCardWrapper>
      ))}
    </BenefitsCardsWrapper>
  </BenefitsWrapper>
);
