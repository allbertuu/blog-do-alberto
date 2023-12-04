import { GitHubCard } from '@components/github';
import {
  BlogBanner,
  LogoBrandContainer,
  SearchInput,
  TotalPosts,
} from '@components/index';
import { PostsSection } from '@components/PostsSection';
import Head from 'next/head';

const Home = () => {
  return (
    <div>
      <Head>
        <title>Blog do Alberto | Onde você experimenta minha mente</title>
      </Head>

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

        <PostsSection />
      </main>
    </div>
  );
};

export default Home;
