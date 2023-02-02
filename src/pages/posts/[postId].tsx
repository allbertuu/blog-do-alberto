import type { NextPage } from 'next';
import Head from 'next/head';
import LogoBrandContainer from '@components/LogoBrandContainer';
import BlogBanner from '@components/BlogBanner';
import PostLoader from '@components/loaders/PostLoader';
import { useRouter } from 'next/router';

const Post: NextPage = () => {
    const router = useRouter();
    const { postId } = router.query;

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

                <PostLoader postId={postId}>
                    {/* <PostHeaderCard /> */}
                    {/* PostBody */}
                </PostLoader>
            </main>
        </div>
    );
};

export default Post;
