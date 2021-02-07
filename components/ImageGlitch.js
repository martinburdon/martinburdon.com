import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  position: relative;

  img {
    display: block;
  }

  div {
    animation: glitch1 2.5s infinite;
    border-radius: 2px;
    overflow: hidden;
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

const ImageGlitch = ({ src, alt, ...rest }) => {
  const images = [...Array(3)].map((_, x) => (
    <div key={x}>
      <img src={src} alt={alt} />
    </div>
  ));
  return <Container {...rest}>{images}</Container>;
};

export default ImageGlitch;
