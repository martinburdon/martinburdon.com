import Layout from '@/components/Layout';
import { getAllSnippets } from '@/utils/snippets';
import { Flex, Heading, Text } from '@chakra-ui/core';
import Link from 'next/link';
import styled from '@emotion/styled';

const SnippetItem = styled(Flex)`
  cursor: pointer;

  &:hover {
    h2 {
      color: var(--teal-100);
    }
  }

  h2 {
    color: var(--teal-400);
    font-size: 20px;
    margin-bottom: 6px;
  }

  p {
    color: var(--gray-50);
  }
`;

const Snippets = ({ snippets }) => {
  return (
    <Layout>
      {snippets.map((snippet) => (
        <SnippetItem direction="column" mb={8} key={snippet.slug}>
          <Link href={`/snippets/${snippet.slug}`} passHref>
            <a>
              <Heading as="h2">{snippet.name}</Heading>
              <Text>{snippet.description}</Text>
            </a>
          </Link>
        </SnippetItem>
      ))}
    </Layout>
  );
};

export default Snippets;

export async function getStaticProps() {
  const snippets = getAllSnippets(['name', 'description', 'date', 'slug']);
  return {
    props: {
      snippets
    }
  };
}
