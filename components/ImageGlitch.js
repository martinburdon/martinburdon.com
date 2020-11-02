import { Box, Image } from '@chakra-ui/core';
import styled from '@emotion/styled';

const Container = styled(Box)`
  display: flex;
  position: relative;

  div {
    position: relative;
    z-index: 3;
    animation: glitch1 2.5s infinite;

    &::after {
      background-color: #1d3162;
      mix-blend-mode: lighten;
    }

    &::after {
      content: '';
      position: absolute;
      height: 100%;
      left: 0;
      top: 0;
      width: 100%;
    }
  }

  div:first-child {
    background: #29ffc4;
    position: absolute;
    z-index: 1;
    animation: glitch2 2.5s infinite;

    img {
      mix-blend-mode: multiply; // multiply, darken, lighten
      filter: grayscale(100%) contrast(1);
    }
  }

  div:last-child {
    background: #f32959;
    position: absolute;
    z-index: 2;
    animation: glitch3 2.5s infinite;

    img {
      mix-blend-mode: darken; // multiply, darken, lighten
      filter: grayscale(100%) contrast(1);
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
