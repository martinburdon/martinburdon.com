import NowPlaying from '@/components/NowPlaying';

import { Icon, Flex, Link } from '@chakra-ui/core';
import styled from '@emotion/styled';

const SocialLink = styled(Link)`
  margin: 1rem;

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
    <Flex
      as="footer"
      direction="column"
      alignItems="center"
      mt="auto"
      p={[8, 16]}
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
  );
};

export default Footer;
