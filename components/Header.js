import Link from 'next/link';
import { Flex, List, ListItem, Text } from '@chakra-ui/core';
import styled from '@emotion/styled';

const Heading = styled(Text)`
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
      p={[8, 16]}
    >
      <Heading as="h1">
        <span>Martin</span>
        <span>Burdon</span>
      </Heading>
      <List display="flex">
        <ListItem>
          <Link href="/">
            <NavAnchor>Home</NavAnchor>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/dashboard">
            <NavAnchor>Dashboard</NavAnchor>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/code">
            <NavAnchor>Code</NavAnchor>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/photos">
            <NavAnchor>Photos</NavAnchor>
          </Link>
        </ListItem>
      </List>
    </Flex>
  );
};

export default Header;
