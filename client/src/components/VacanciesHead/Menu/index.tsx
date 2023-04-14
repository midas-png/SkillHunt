import { useState, FC } from 'react';
import type { MenuProps } from 'antd';
import { MenuComponent as Menu } from './styles';

const items: MenuProps['items'] = [
  {
    label: 'All Vacancies',
    key: 'all',
  },
  {
    label: 'Favorite',
    key: 'favorite',
  },
];

export const VacanciesMenu: FC = () => {
  const [current, setCurrent] = useState('all');

  const onClick: MenuProps['onClick'] = (e) => {
    setCurrent(e.key);
  };

  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode='horizontal'
      style={{ width: '100%' }}
      items={items}
    />
  );
};
