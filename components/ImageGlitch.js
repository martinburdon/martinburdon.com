import { Box, Image } from '@chakra-ui/core';
import styled from '@emotion/styled';

const Container = styled(Box)`
  display: flex;
  margin: 200px 0;
  position: relative;

  div {
    position: relative;

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

    img {
      mix-blend-mode: multiply; // multiply, darken, lighten
      filter: grayscale(100%) contrast(1);
    }
  }

  div:last-child {
    background: #f32959;

    img {
      mix-blend-mode: darken; // multiply, darken, lighten
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
