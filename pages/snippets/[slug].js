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
    code: (props) => <Code {...props} />
  };

  return (
    <Layout>
      <article>
        <H1>{snippet?.name}</H1>
        <MDX components={components}>{snippet?.content}</MDX>
      </article>
    </Layout>
  );
};

export default Snippet;

// Get the frontmatter attrs and content for a snippet given its slug
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

// Get paths to all snippets so they can be statically generated
export async function getStaticPaths() {
  const snippets = getAllSnippets(['slug']);
  return {
    paths: snippets.map((snippet) => {
      return {
        params: { ...snippet }
      };
    }),
    fallback: false
  };
}
