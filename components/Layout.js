import Footer from './Footer';
import Header from './Header';
import { Flex } from '@chakra-ui/core';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Flex as="main" direction="column" p={[8, 8, 16]} flex="1 1 auto">
        {children}
      </Flex>
      <Footer />
    </>
  );
};

export default Layout;
