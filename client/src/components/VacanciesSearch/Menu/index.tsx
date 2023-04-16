import { useState, FC } from 'react';
import type { MenuProps } from 'antd';
import { MenuComponent as Menu } from './styles';
import { vacanciesSlice } from 'store';
import { useAppDispatch, useAppSelector } from 'features';

type VacanciesType = 'ALL' | 'FAVORITE';

interface MenuItems {
  label: string;
  key: VacanciesType;
}

const items: MenuItems[] = [
  {
    label: 'All Vacancies',
    key: 'ALL',
  },
  {
    label: 'Favorite',
    key: 'FAVORITE',
  },
];

export const VacanciesMenu: FC = () => {
  const [current, setCurrent] = useState('ALL');
  const { setType } = vacanciesSlice.actions;
  const { type } = useAppSelector((state) => state.vacanciesSlice);
  const dispatch = useAppDispatch();

  const handleMenu: MenuProps['onClick'] = (e) => {
    if (e.key !== type) {
      setCurrent(e.key);
      dispatch(setType(e.key));
    }
  };

  return (
    <Menu
      onClick={handleMenu}
      selectedKeys={[current]}
      mode='horizontal'
      items={items}
    />
  );
};
