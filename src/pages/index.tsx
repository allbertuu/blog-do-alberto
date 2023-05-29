import type { NextPage } from 'next';
import Head from 'next/head';
import GitHubCard from './components/GitHubCard';
import GitHubUserLoader from './components/GitHubUserLoader';
import LogoBrandContainer from './components/LogoBrandContainer';
import PostsSection from './posts/components/PostsSection';
import SearchInput from './components/SearchInput';
import TotalPosts from './components/TotalPosts';
import BlogBanner from './components/BlogBanner';

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>
                    Blog do Alberto | Onde você experimenta minha mente
                </title>
            </Head>

            <BlogBanner />

            <main className="mx-auto w-full max-w-4xl px-6 pb-40">
                <LogoBrandContainer />

                <GitHubUserLoader>
                    <GitHubCard />
                </GitHubUserLoader>

                {/* Header Posts List */}
                <div className="flex justify-between flex-1 font-bold mt-16 mb-2">
                    <h1 className="text-blue-100 text-2xl">Publicações</h1>
                    <TotalPosts />
                </div>

                <SearchInput className="mb-12 w-full" />

                <PostsSection />
            </main>
        </div>
    );
};

export default Home;
