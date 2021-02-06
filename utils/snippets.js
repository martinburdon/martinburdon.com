import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

const snippetsDir = join(process.cwd(), 'snippets');

export function getSnippetSlugs() {
  return fs.readdirSync(snippetsDir);
}

export function getSnippetBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.mdx$/, '');
  const fullPath = join(snippetsDir, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  const items = {};
  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') items[field] = realSlug;
    if (field === 'content') items[field] = content;
    if (data[field]) items[field] = data[field];
  });
  return items;
}

export function getAllSnippets(fields = []) {
  const slugs = getSnippetSlugs();
  const snippets = slugs
    .map((slug) => getSnippetBySlug(slug, fields))
    // sort snippets by date in descending order
    .sort((snippet1, snippet2) => (snippet1.date > snippet2.date ? '-1' : '1'));
  return snippets;
}
