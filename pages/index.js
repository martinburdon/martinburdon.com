import Layout from '@/components/Layout';
import TextGlitch from '@/components/TextGlitch';
import Code from '@/components/Code';
import styled from '@emotion/styled';

const StyledGlitch = styled(TextGlitch)`
  font-family: 'Roboto Mono';
  font-size: 40px;
  font-weight: 700;
  text-transform: uppercase;
`;

const Home = () => {
  const exampleCode = `
  <div>hi</div>
  `.trim();

  return (
    <Layout>
      The home page
      <Code className="html">{exampleCode}</Code>
      <StyledGlitch>Testing</StyledGlitch>
    </Layout>
  );
};

export default Home;
