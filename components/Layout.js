import Footer from './Footer';
import Header from './Header';
import { Flex } from '@chakra-ui/core';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Flex as="main" direction="column" p={[8, 16]}>
        {children}
      </Flex>
      <Footer />
    </>
  );
};

export default Layout;
