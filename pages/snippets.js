import Layout from '@/components/Layout';
import { getAllSnippets } from '@/utils/snippets';
import Link from 'next/link';

const Snippets = ({ snippets }) => {
  return (
    <Layout>
      {snippets.map((snippet) => (
        <div key={snippet.slug}>
          <Link href={`/snippets/${snippet.slug}`} passHref>
            <a>
              <h2>{snippet.name}</h2>
              <p>{snippet.description}</p>
            </a>
          </Link>
        </div>
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
