import Link from 'next/link';
import { Flex, List, ListItem } from '@chakra-ui/core';
import TextGlitch from '@/components/TextGlitch';
import styled from '@emotion/styled';

const Logo = styled.a`
  color: var(--teal-400);
  font-family: 'Roboto Mono';
  font-size: 1.4rem;
  font-weight: 700;

  span {
    display: block;
    line-height: 1;
  }
`;

const NavAnchor = styled.a`
  cursor: pointer;
  display: block;
  font-family: 'Roboto Mono';
  font-weight: 700;
  font-size: 16px;
  padding: 10px 14px;
  transition: color 0.2s ease;

  &:hover {
    color: var(--teal-300);
  }
`;

const Header = () => {
  return (
    <Flex
      as="header"
      alignItems="center"
      justifyContent="space-between"
      flexDirection={['column', 'column', 'row']}
      p={[8, 8, 16]}
    >
      <Link href="/" passHref>
        <Logo>
          <TextGlitch iterationCount="1">
            <span>Martin</span>
            <span>Burdon</span>
          </TextGlitch>
        </Logo>
      </Link>
      <List display="flex" mt={[4, 4, 0]}>
        <ListItem>
          <Link href="/" passHref>
            <NavAnchor>Home</NavAnchor>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/dashboard" passHref>
            <NavAnchor>Dashboard</NavAnchor>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/code" passHref>
            <NavAnchor>Code</NavAnchor>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/photos" passHref>
            <NavAnchor>Photos</NavAnchor>
          </Link>
        </ListItem>
      </List>
    </Flex>
  );
};

export default Header;
