import Link from 'next/link';
import NowPlaying from '@/components/NowPlaying';
import styled from '@emotion/styled';

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: auto;
`;

const FooterStyled = styled.footer`
  background: var(--gray-800);
  padding: 0 60px 60px;

  > div {
    align-items: center;
    display: flex;
    flex-direction: column;
  }
`;

const FooterNav = styled.div`
  margin-top: 40px;
`;

const FooterLink = styled.a`
  color: var(--gray-500);
  margin: 0 2px;
  padding: 4px 8px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="var(--gray-800)"
          fillOpacity="1"
          d="M0,256L40,218.7C80,181,160,107,240,85.3C320,64,400,96,480,122.7C560,149,640,171,720,170.7C800,171,880,149,960,128C1040,107,1120,85,1200,96C1280,107,1360,149,1400,170.7L1440,192L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
        ></path>
      </svg>
      <FooterStyled>
        <div>
          <NowPlaying />
          <FooterNav>
            <Link href="https://github.com/martinburdon" passHref>
              <FooterLink target="_blank">GitHub</FooterLink>
            </Link>
            <Link href="mailto:martin@martinburdon.co.uk" passHref>
              <FooterLink target="_blank">Email</FooterLink>
            </Link>
            <Link href="https://instagram.com/martin870" passHref>
              <FooterLink target="_blank">Instagram</FooterLink>
            </Link>
            <Link href="https://twitter.com/martin870" passHref>
              <FooterLink target="_blank">Twitter</FooterLink>
            </Link>
          </FooterNav>
        </div>
      </FooterStyled>
    </FooterContainer>
  );
};

export default Footer;
