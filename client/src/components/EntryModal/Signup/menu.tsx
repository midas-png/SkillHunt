import { useState, FC } from 'react';
import type { MenuProps } from 'antd';
import { MenuComponent as Menu } from './styles';
import { vacanciesSlice } from 'store';
import { useAppDispatch, useAppSelector } from 'features';

type VacanciesType = 'USER' | 'COMPANY';

interface MenuItems {
  label: string;
  key: VacanciesType;
}

const items: MenuItems[] = [
  {
    label: 'Specialist',
    key: 'USER',
  },
  {
    label: 'Company',
    key: 'COMPANY',
  },
];

export const RoleMenu: FC = () => {
  const [current, setCurrent] = useState('USER');
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
