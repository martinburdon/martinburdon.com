import Link from 'next/link';
import styled from '@emotion/styled';

const HeaderInner = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.a`
  font-family: 'Satisfy', cursive;
  color: var(--gray-50);
  display: block;
  font-size: 2.4rem;
  font-weight: 700;
  text-decoration: none;

  span {
    display: block;
    line-height: 1;
    text-shadow: 2px 2px 0px var(--gray-900), 6px 2px 0px var(--gray-700);

    &:last-child {
      margin-left: 10px;
    }
  }

  &:hover {
    text-decoration: none;
  }
`;

const Nav = styled.ul`
  display: flex;
`;

const NavAnchor = styled.a`
  display: block;
  font-weight: 700;
  font-size: 16px;
  padding: 10px 14px;
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: var(--teal-300);
    text-decoration: none;
  }
`;

const Header = () => {
  return (
    <header>
      <HeaderInner>
        <Link href="/" passHref>
          <Logo>
            <span>Martin</span>
            <span>Burdon</span>
          </Logo>
        </Link>
        <nav>
          <Nav>
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
          </Nav>
        </nav>
      </HeaderInner>
    </header>
  );
};

export default Header;
