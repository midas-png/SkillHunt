import { Assets } from 'assets';

interface IBenefits {
  key: number;
  Icon: string;
  title: string;
  subTitle: string;
}

export const BENEFITS: Array<IBenefits> = [
  {
    key: Math.random(),
    Icon: Assets.UserAccept,
    title: 'Apply to humans',
    subTitle: `72% of applications are never seen by a human!
    With parallel you skip the line and go direct to the hiring team.`,
  },
  {
    key: Math.random(),
    Icon: Assets.Message,
    title: 'Instantly stand out',
    subTitle: `Showcase your projects, passions and work ethos with
    Parallel Profile to stand out from the crowd.`,
  },
  {
    key: Math.random(),
    Icon: Assets.Glass,
    title: 'Real time feedback',
    subTitle: `Don't get ghosted! Get feedback & notifications with every application,
    so that you’re never left wondering.`,
  },
];
