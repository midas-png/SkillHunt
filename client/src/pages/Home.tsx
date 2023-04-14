import { FC } from 'react';
import {
  Hero,
  Benefits,
  TrendingJobs,
  TopCompanies,
  TopCollections,
  JoinBanner,
  FAQs,
} from 'components';

export const Home: FC = () => (
  <>
    <Hero />
    <Benefits />
    <TrendingJobs />
    <TopCompanies />
    <TopCollections />
    <FAQs />
    <JoinBanner />
  </>
);
