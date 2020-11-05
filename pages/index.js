import Layout from '@/components/Layout';
import TextGlitch from '@/components/TextGlitch';
import styled from '@emotion/styled';

const StyledGlitch = styled(TextGlitch)`
  font-family: 'Roboto Mono';
  font-size: 40px;
  font-weight: 700;
  text-transform: uppercase;
`;

const Home = () => {
  return (
    <Layout>
      The home page
      <StyledGlitch>Testing</StyledGlitch>
    </Layout>
  );
};

export default Home;
