import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>
        <div>{children}</div>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
