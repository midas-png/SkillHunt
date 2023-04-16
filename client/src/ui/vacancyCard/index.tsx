import { FC } from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import {
  CardWrapper,
  CardHeaderWrapper,
  CardImage,
  CardInfoWrapper,
  CardTitle,
  CardSubtitle,
  CardEmployees,
} from './styles';
import { IProps } from './props';
import { Button } from 'ui';

export const VacancyCard: FC<IProps> = ({
  title,
  company,
  location,
  employees,
  apply,
}) => {
  return (
    <CardWrapper>
      <CardHeaderWrapper>
        <CardImage />
        <AiOutlineHeart />
      </CardHeaderWrapper>
      <CardInfoWrapper>
        <CardTitle>{title}</CardTitle>
        <CardSubtitle>
          {company} · {location}
        </CardSubtitle>
        <CardEmployees>{employees} Active Employees</CardEmployees>
      </CardInfoWrapper>
      <Button>{apply === 'direct' ? 'Apply Direct' : 'External Apply'}</Button>
    </CardWrapper>
  );
};
