import { BlogBanner, LogoBrandContainer, SearchInput } from '@/components';
import { Posts } from '@/components/Posts';
import { GitHubCard } from '@/components/github';

export default async function Page() {
  // const posts = await fetchPosts();

  return (
    <div>
      <BlogBanner />

      <main className="mx-auto w-full max-w-4xl px-6 pb-40">
        <LogoBrandContainer />

        <GitHubCard />

        {/* Header Posts List */}
        <div className="mb-2 mt-16 flex flex-1 justify-between font-bold">
          <h1 className="text-2xl text-blue-100">Publicações</h1>

          {/* <p className="text-lg text-[#7B96B2]">
            <span>{posts.length}</span>{' '}
            {posts.length === 1 ? 'publicação' : 'publicações'}
          </p> */}
        </div>

        <SearchInput className="mb-12 w-full" />

        <Posts />
      </main>
    </div>
  );
}
