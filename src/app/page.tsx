import { BlogBanner, LogoBrandContainer, SearchInput } from '@/components';
import { Posts } from '@/components/Posts';
import { TotalPosts } from '@/components/TotalPosts';
import { GitHubCard } from '@/components/github';

export default async function Page() {
  return (
    <div>
      <BlogBanner />

      <main className="mx-auto w-full max-w-4xl px-6 pb-40">
        <LogoBrandContainer />

        <GitHubCard />

        {/* Header Posts List */}
        <div className="mb-2 mt-16 flex flex-1 justify-between font-bold">
          <h1 className="text-2xl text-blue-100">Publicações</h1>

          <TotalPosts />
        </div>

        <SearchInput className="mb-12 w-full" />

        <Posts />
      </main>
    </div>
  );
}
