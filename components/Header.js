import Link from 'next/link';
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
    <header>
      <Link href="/" passHref>
        <Logo>Martin Burdon</Logo>
      </Link>
      <ul>
        <li>
          <Link href="/" passHref>
            <NavAnchor>Home</NavAnchor>
          </Link>
        </li>
        <li>
          <Link href="/dashboard" passHref>
            <NavAnchor>Dashboard</NavAnchor>
          </Link>
        </li>
        <li>
          <Link href="/snippets" passHref>
            <NavAnchor>Snippets</NavAnchor>
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
