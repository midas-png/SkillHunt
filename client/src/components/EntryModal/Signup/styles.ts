import styled from 'styled-components';
import { Menu } from 'antd';

export const SignupModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
`;

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 10px;
`;

export const LinkWrapper = styled.div`
  display: flex;
  gap: 5px;
`;

export const ModalTermsWrapper = styled.span`
  text-align: center;
`;

export const ModalTerms = styled.span`
  font-size: 14px;
  opacity: 0.6;
  color: ${({ theme }) => theme.palette.secondary};
`;

export const ModalTermsLink = styled.span`
  font-size: 14px;
  cursor: pointer;
  color: ${({ theme }) => theme.palette.secondary};
`;

export const ModalLink = styled.span`
  font-size: 16px;
  cursor: pointer;
  color: ${({ theme }) => theme.palette.secondary};
`;

export const ModalLinkContent = styled.span`
  font-size: 16px;
  opacity: 0.6;
  color: ${({ theme }) => theme.palette.secondary};
`;

export const MenuComponent = styled(Menu)`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
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
