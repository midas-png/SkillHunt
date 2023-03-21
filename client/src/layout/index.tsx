import { Navbar } from './navbar';
import { LayoutWrapper } from './styles';
import { AppRouter } from 'pages';

export const Layout = () => (
  <LayoutWrapper>
    <Navbar />
    <AppRouter />
  </LayoutWrapper>
);
