import { FC } from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import {
  TrendingJobsWrapper,
  TrendingTitleWrapper,
  ButtonWrapper,
  ButtonContent,
  ButtonArrow,
  SwiperWrapper,
  JobCardWrapper,
  JobCardHeaderWrapper,
  JobCardImage,
  JobCardInfoWrapper,
  JobCardTitle,
  JobCardSubtitle,
  JobCardEmployees,
} from './styles';
import { TRENDING_JOBS } from './data';
import { Button, Title } from 'ui';

export const TrendingJobs: FC = () => {
  return (
    <TrendingJobsWrapper>
      <TrendingTitleWrapper>
        <Title variant='h2'>Trending jobs</Title>
        <ButtonWrapper>
          <ButtonContent>View all</ButtonContent>
          <ButtonArrow />
        </ButtonWrapper>
      </TrendingTitleWrapper>
      <SwiperWrapper spaceBetween={40} slidesPerView='auto'>
        {TRENDING_JOBS.map((job) => (
          <JobCardWrapper key={job.id}>
            <JobCardHeaderWrapper>
              <JobCardImage />
              <AiOutlineHeart />
            </JobCardHeaderWrapper>
            <JobCardInfoWrapper>
              <JobCardTitle>{job.title}</JobCardTitle>
              <JobCardSubtitle>
                {job.company} · {job.location}
              </JobCardSubtitle>
              <JobCardEmployees>
                {job.employees} Active Employees
              </JobCardEmployees>
            </JobCardInfoWrapper>
            <Button>
              {job.apply === 'direct' ? 'Apply Direct' : 'External Apply'}
            </Button>
          </JobCardWrapper>
        ))}
      </SwiperWrapper>
    </TrendingJobsWrapper>
  );
};
