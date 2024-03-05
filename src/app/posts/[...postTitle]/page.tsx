import { BlogBanner, LogoBrandContainer } from '@/components';
import { PostBody } from '@/components/PostBody';
import { PostHeader } from '@/components/PostHeader';
import { fetchIssue } from '@/services/github.api';
import { Metadata } from 'next';

type Props = {
  params: { postTitle: string[] };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const issueNumber = params.postTitle[1];

  const issue = await fetchIssue(issueNumber);

  return {
    title: `${issue.title.slice(0, 50)}...`,
    description: `${issue.body.slice(0, 160)}...`,
  };
}

export default function Page() {
  return (
    <div>
      <BlogBanner />

      <main className="mx-auto w-full max-w-4xl px-6 pb-40">
        <LogoBrandContainer />
        <PostHeader />
        <PostBody />
      </main>
    </div>
  );
}
