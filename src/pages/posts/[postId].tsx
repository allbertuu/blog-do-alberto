import { BlogBanner, LogoBrandContainer } from '@components/index';
import { PostBody, PostLoader } from '@components/post';
import PostHeaderCard from '@components/post/Card/Header';
import type { NextPage } from 'next';
import Head from 'next/head';

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

                <PostLoader>
                    <PostHeaderCard />
                    <PostBody />
                </PostLoader>
            </main>
        </div>
    );
};

export default Post;
