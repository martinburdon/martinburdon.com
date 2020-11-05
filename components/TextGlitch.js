import { Box, Text } from '@chakra-ui/core';
import styled from '@emotion/styled';

const Container = styled(Box)`
  display: flex;
  position: relative;

  p {
    font-family: inherit;
  }

  p {
    animation: glitch1 2.5s ${(props) => props.iterationCount};
    color: var(--teal-400);
    position: relative;
    z-index: 3;
  }

  p:first-child {
    animation: glitch2 2.5s ${(props) => props.iterationCount};
    color: #29ffc4;
    position: absolute;
    z-index: 1;
  }

  p:last-child {
    animation: glitch3 2.5s ${(props) => props.iterationCount};
    color: #f32959;
    position: absolute;
    z-index: 2;
  }

  @keyframes glitch1 {
    0% {
      transform: none;
      opacity: 0.5;
    }
    7% {
      transform: skew(-0.3deg, -0.6deg);
      opacity: 0;
    }
    10% {
      transform: none;
      opacity: 0.7;
    }
    27% {
      transform: none;
      opacity: 1;
    }
    30% {
      transform: skew(0.4deg, -0.1deg);
      opacity: 0.8;
    }
    35% {
      transform: none;
      opacity: 1;
    }
    52% {
      transform: none;
      opacity: 1;
    }
    55% {
      transform: skew(-1deg, 0.2deg);
      opacity: 0;
    }
    50% {
      transform: none;
      opacity: 1;
    }
    72% {
      transform: none;
      opacity: 0.2;
    }
    75% {
      transform: skew(0.4deg, 1deg);
      opacity: 0;
    }
    80% {
      transform: none;
      opacity: 0.2;
    }
    100% {
      transform: none;
      opacity: 1;
    }
  }

  @keyframes glitch2 {
    0% {
      transform: none;
      opacity: 0.25;
    }
    7% {
      transform: translate(-2px, -3px);
      opacity: 0.5;
    }
    10% {
      transform: none;
      opacity: 0.25;
    }
    27% {
      transform: none;
      opacity: 0.25;
    }
    30% {
      transform: translate(-5px, -2px);
      opacity: 0.5;
    }
    35% {
      transform: none;
      opacity: 0.25;
    }
    52% {
      transform: none;
      opacity: 0.25;
    }
    55% {
      transform: translate(-5px, -1px);
      opacity: 0.5;
    }
    50% {
      transform: none;
      opacity: 0.25;
    }
    72% {
      transform: none;
      opacity: 0.25;
    }
    75% {
      transform: translate(-2px, -6px);
      opacity: 0.5;
    }
    80% {
      transform: none;
      opacity: 0.25;
    }
    100% {
      transform: none;
      opacity: 0.25;
    }
  }

  @keyframes glitch3 {
    0% {
      transform: none;
      opacity: 0.25;
    }
    7% {
      transform: translate(2px, 3px);
      opacity: 0.5;
    }
    10% {
      transform: none;
      opacity: 0.25;
    }
    27% {
      transform: none;
      opacity: 0.25;
    }
    30% {
      transform: translate(5px, 2px);
      opacity: 0.5;
    }
    35% {
      transform: none;
      opacity: 0.25;
    }
    52% {
      transform: none;
      opacity: 0.25;
    }
    55% {
      transform: translate(5px, 1px);
      opacity: 0.5;
    }
    50% {
      transform: none;
      opacity: 0.25;
    }
    72% {
      transform: none;
      opacity: 0.25;
    }
    75% {
      transform: translate(2px, 6px);
      opacity: 0.5;
    }
    80% {
      transform: none;
      opacity: 0.25;
    }
    100% {
      transform: none;
      opacity: 0.25;
    }
  }
`;

const TextGlitch = ({ children, iterationCount = 'infinite', ...rest }) => {
  const layers = [...Array(3)].map((_, x) => <Text key={x}>{children}</Text>);
  return (
    <Container iterationCount={iterationCount} {...rest}>
      {layers}
    </Container>
  );
};

export default TextGlitch;
