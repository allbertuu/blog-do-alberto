import type { NextPage } from 'next';
import Head from 'next/head';
import LogoBrandContainer from '@components/LogoBrandContainer';
import BlogBanner from '@components/BlogBanner';

const Post: NextPage = () => {
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

                {/* PostHeaderCard */}
                {/* PostBody */}
            </main>
        </div>
    );
};

export default Post;
