import Layout from '@/components/Layout';
import { getAllSnippets } from '@/utils/snippets';
import { Flex, Heading, Text } from '@chakra-ui/core';
import Link from 'next/link';

const Snippets = ({ snippets }) => {
  return (
    <Layout>
      {snippets.map((snippet) => (
        <Link key={snippet.slug} href={`/snippets/${snippet.slug}`} passHref>
          <Flex direction="column" mb={4}>
            <Heading as="h2">{snippet.name}</Heading>
            <Text>{snippet.description}</Text>
            <Text>{snippet.date}</Text>
          </Flex>
        </Link>
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
