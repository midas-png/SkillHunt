import { Navbar } from './navbar';
import { Footer } from './footer';
import { LayoutWrapper } from './styles';
import { AppRouter } from 'pages';

export const Layout = () => (
  <LayoutWrapper>
    <Navbar />
    <AppRouter />
    <Footer />
  </LayoutWrapper>
);
