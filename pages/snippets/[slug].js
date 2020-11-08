import MDX from '@mdx-js/runtime';
import Layout from '@/components/Layout';
import { getAllSnippets, getSnippetBySlug } from '@/utils/snippets';
import TextGlitch from '@/components/TextGlitch';
import Code from '@/components/Code';

const Snippet = ({ snippet }) => {
  const components = {
    TextGlitch: (props) => <TextGlitch {...props} />,
    pre: (props) => <div {...props} />,
    code: (props) => <Code {...props} />
  };

  return (
    <Layout>
      <MDX components={components}>{snippet?.content}</MDX>
    </Layout>
  );
};

export default Snippet;

export async function getStaticProps({ params }) {
  const snippet = getSnippetBySlug(params.slug, [
    'content',
    'name',
    'description',
    'date',
    'slug'
  ]);
  return {
    props: { snippet }
  };
}

export async function getStaticPaths() {
  const snippets = getAllSnippets(['slug']);
  return {
    paths: snippets.map((snippet) => {
      return {
        params: { ...snippet }
      };
    }),
    fallback: true
  };
}
