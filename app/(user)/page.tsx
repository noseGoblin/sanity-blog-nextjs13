import { draftMode } from 'next/headers';
import { LiveQuery } from 'next-sanity/preview/live-query';
import DocumentsCount, { query } from '@/components/DocumentsCount';
import PreviewDocumentsCount from '@/components/PreviewDocumentsCount';
import { sanityFetch } from '@/sanity/lib/fetch';

export default async function Home() {
  const data = await sanityFetch<number>({ query, tags: ['post'] });

  return (
    <>
      <LiveQuery
        enabled={draftMode().isEnabled}
        query={query}
        initialData={data}
        as={PreviewDocumentsCount}
      >
        <DocumentsCount data={data} />
      </LiveQuery>
      <div>
        {/* <h1 className='text-4xl'>Welcome to the Blog, bitches</h1> */}
      </div>
    </>
  );
}
