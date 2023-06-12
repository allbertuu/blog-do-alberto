import type { NextPage } from 'next';
import Head from 'next/head';
import { GitHubCard, GitHubUserLoader } from '@components/github';
import {
    LogoBrandContainer,
    SearchInput,
    TotalPosts,
    BlogBanner,
} from '@components/index';
import { PostsSection } from '@components/post';

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
                <div className="mt-16 mb-2 flex flex-1 justify-between font-bold">
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
