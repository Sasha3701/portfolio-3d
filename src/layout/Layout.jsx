import { Header } from './components';

export const Layout = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
  </>
);
