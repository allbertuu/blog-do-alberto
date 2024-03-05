import { BlogBanner, LogoBrandContainer } from '@/components';
import { PostBody } from '@/components/PostBody';
import { PostHeader } from '@/components/PostHeader';

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
