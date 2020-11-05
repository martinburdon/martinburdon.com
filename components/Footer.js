import NowPlaying from '@/components/NowPlaying';

import { Icon, Flex, Link } from '@chakra-ui/core';
import styled from '@emotion/styled';

const SocialLink = styled(Link)`
  padding: 1rem;

  svg {
    transition: color 0.2s ease;
  }

  &:hover {
    svg {
      color: #29ffc4;
      fill: #29ffc4;
      color: var(--teal-400);
      fill: var(--teal-400);
    }
  }
`;

const SocialIcon = styled(Icon)`
  color: var(--gray-500);
  fill: var(--gray-500);
  height: 1.4rem;
  width: 1.4rem;
`;

const Footer = () => {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="var(--gray-800)"
          fillOpacity="1"
          d="M0,256L40,218.7C80,181,160,107,240,85.3C320,64,400,96,480,122.7C560,149,640,171,720,170.7C800,171,880,149,960,128C1040,107,1120,85,1200,96C1280,107,1360,149,1400,170.7L1440,192L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
        ></path>
      </svg>
      <Flex
        as="footer"
        background="var(--gray-800)"
        direction="column"
        alignItems="center"
        p={[8, 8, 16]}
        pt={[0, 0, 0]}
      >
        <NowPlaying />
        <Flex>
          <SocialLink
            href="https://github.com/martinburdon"
            title="GitHub"
            isExternal
          >
            <SocialIcon aria-label="GitHub" name="github" />
          </SocialLink>
          <SocialLink
            href="mailto:martin@martinburdon.co.uk"
            title="Email"
            isExternal
          >
            <SocialIcon aria-label="Email" name="mail" />
          </SocialLink>
          <SocialLink
            href="https://instagram.com/martin870"
            title="Instagram"
            isExternal
          >
            <SocialIcon aria-label="Instagram" name="instagram" />
          </SocialLink>
        </Flex>
      </Flex>
    </>
  );
};

export default Footer;
