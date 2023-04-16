import styled from 'styled-components';
import { Menu } from 'antd';

export const MenuComponent = styled(Menu)`
  width: 100%;

  .ant-menu-item {
    font-size: 18px;
    color: #c0c0c0;
  }

  .ant-menu-item::after {
    border-bottom: 2px solid ${(props) => props.theme.palette.secondary};
  }

  .ant-menu-overflow-item.ant-menu-item-selected.ant-menu-item-only-child,
  .ant-menu-overflow-item.ant-menu-item.ant-menu-item-only-child:hover,
  .ant-menu-overflow-item.ant-menu-item-selected.ant-menu-item-only-child:after,
  .ant-menu-overflow-item.ant-menu-item-active.ant-menu-item-only-child:after {
    color: ${(props) => props.theme.palette.secondary};
    border-bottom-color: ${(props) => props.theme.palette.secondary};
  }

  .ant-menu-overflow-item.ant-menu-item-selected.ant-menu-item-only-child,
  .ant-menu-overflow-item.ant-menu-item.ant-menu-item-only-child:hover {
    color: ${(props) => props.theme.palette.secondary};
    border-bottom-color: ${(props) => props.theme.palette.secondary};
  }

  .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item-selected {
    border-bottom: 2px solid ${(props) => props.theme.palette.secondary};
  }
`;
