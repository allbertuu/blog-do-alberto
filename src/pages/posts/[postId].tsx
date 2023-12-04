import { BlogBanner, LogoBrandContainer } from '@components/index';
import { PostBody } from '@components/PostBody';
import { PostHeader } from '@components/PostHeader';
import Head from 'next/head';

const Post = () => {
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
                <PostHeader />
                <PostBody />
            </main>
        </div>
    );
};

export default Post;
