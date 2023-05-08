export const TYPES_OF_WORK_PLACE = ['All', 'Office', 'Hybrid', 'Remote'];
export const SPECIALIST_LEVEL = [
  'All',
  'Trainee',
  'Intern',
  'Junior',
  'Junior+',
  'Middle',
  'Middle+',
  'Senior',
  'Lead',
];
export const TYPES_OF_EMPLOYMENT = ['Full Time', 'Part Time', 'Project', 'All'];

interface Experience {
  min: number | null;
  max: number | null;
}

export interface IFilters {
  experience: Experience;
  location: string | null;
  jobFormat: string;
  level: string;
  employmentType: string;
}

export const initialFilters = {
  experience: {
    min: null,
    max: null,
  },
  location: null,
  jobFormat: 'All',
  level: 'All',
  employmentType: 'Full Time',
};
