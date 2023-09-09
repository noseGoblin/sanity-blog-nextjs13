import BlogList from '@/components/BlogList';
import { client } from '@/sanity/lib/client';
import { groq } from 'next-sanity';
// import { SanityClient } from 'sanity';

const query = groq`*[_type == 'post'] {
  ...,
  author->,
  categories[]->,
} | order(_createdAt desc)`;

export default async function Home() {
  const posts = await client.fetch(query);

  return <BlogList posts={posts} />;
}
