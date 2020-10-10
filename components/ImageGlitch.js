import { Box, Image } from '@chakra-ui/core';
import styled from '@emotion/styled';

const Container = styled(Box)`
  display: flex;
  margin: 200px 0;
  position: relative;

  div {
    position: relative;
  }

  div:nth-child(1) {
    background: #00ff36;

    img {
      mix-blend-mode: multiply; // Or darken, lighten
      filter: grayscale(100%) contrast(1);
    }
  }

  div:nth-child(3) {
    background: #e41c2d;

    &::after {
      background-color: #1d3162;
      mix-blend-mode: lighten;

      content: '';
      position: absolute;
      height: 100%;
      left: 0;
      top: 0;
      width: 100%;
    }

    img {
      mix-blend-mode: multiply; // Or darken, lighten
      filter: grayscale(100%) contrast(1);
    }
  }
`;

const ImageGlitch = ({ imageUrl }) => {
  const images = [...Array(3)].map((_, x) => (
    <Box key={x}>
      <Image src={imageUrl} />
    </Box>
  ));
  return <Container>{images}</Container>;
};

export default ImageGlitch;
