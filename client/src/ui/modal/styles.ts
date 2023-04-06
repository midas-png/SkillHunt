import styled from 'styled-components';
import { Modal } from 'antd';

export const ModalWrapper = styled(Modal).attrs({
  footer: null,
  width: 410,
  centered: true,
  transitionName: '',
  maskTransitionName: '',
})`
  .ant-modal-content {
    padding: 20px 50px;
  }
`;
