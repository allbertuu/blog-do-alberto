import BlogBanner from '@components/BlogBanner';
import GitHubCard from '@components/GitHubProfile';
import LogoBrandContainer from '@components/LogoBrandContainer';
import Posts from '@components/Posts';
import SearchInput from '@components/SearchInput';
import TotalPosts from '@components/TotalPosts';
import type { NextPage } from 'next';
import Head from 'next/head';

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
                <GitHubCard />
                {/* Header Posts List */}
                <div className="flex justify-between flex-1 font-bold mt-16 mb-2">
                    <h1 className="text-blue-100 text-2xl">Publicações</h1>
                    <TotalPosts />
                </div>
                <SearchInput className="mb-12 w-full" />
                <Posts />
            </main>
        </div>
    );
};

export default Home;
