import { Box, Image } from '@chakra-ui/core';
import styled from '@emotion/styled';

const Container = styled(Box)`
  display: flex;
  position: relative;

  div {
    animation: glitch1 2.5s infinite;
    position: relative;
    z-index: 3;

    &::after {
      background-color: #1d3162;
      mix-blend-mode: lighten;
    }

    &::after {
      content: '';
      height: 100%;
      left: 0;
      position: absolute;
      top: 0;
      width: 100%;
    }
  }

  div:first-child {
    animation: glitch2 2.5s infinite;
    background: #29ffc4;
    position: absolute;
    z-index: 1;

    img {
      filter: grayscale(100%) contrast(1);
      mix-blend-mode: multiply; // multiply, darken, lighten
    }
  }

  div:last-child {
    animation: glitch3 2.5s infinite;
    background: #f32959;
    position: absolute;
    z-index: 2;

    img {
      filter: grayscale(100%) contrast(1);
      mix-blend-mode: darken; // multiply, darken, lighten
    }
  }
`;

const ImageGlitch = ({ src, alt, ...rest }) => {
  const images = [...Array(3)].map((_, x) => (
    <Box key={x}>
      <Image src={src} alt={alt} />
    </Box>
  ));
  return <Container {...rest}>{images}</Container>;
};

export default ImageGlitch;
