import { Navbar } from './navbar';
import { Footer } from './footer';
import { LayoutWrapper } from './styles';
import { AppRouter } from 'pages';
import { Modal } from 'ui';
import { EntryModal } from 'components';

export const Layout = () => (
  <LayoutWrapper>
    <Navbar />
    <AppRouter />
    <Footer />
    <Modal>
      <EntryModal />
    </Modal>
  </LayoutWrapper>
);
