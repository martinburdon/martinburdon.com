import MDX from '@mdx-js/runtime';
import Layout from '@/components/Layout';
import { getAllSnippets, getSnippetBySlug } from '@/utils/snippets';
import TextGlitch from '@/components/TextGlitch';
import Code from '@/components/Code';
import { P, A, H1, H2, H3 } from '@/styles/type';

const Snippet = ({ snippet }) => {
  const components = {
    TextGlitch: (props) => <TextGlitch {...props} />,
    pre: (props) => <div {...props} />,
    code: (props) => <Code {...props} />,
    p: (props) => <P {...props} />,
    a: (props) => <A {...props} />,
    h1: (props) => <H1 {...props} />,
    h2: (props) => <H2 {...props} />,
    h3: (props) => <H3 {...props} />
  };

  return (
    <Layout>
      <article>
        <H1>{snippet.name}</H1>
        <MDX components={components}>{snippet?.content}</MDX>
      </article>
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
