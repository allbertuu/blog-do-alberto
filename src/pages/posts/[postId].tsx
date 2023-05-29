import type { NextPage } from 'next';
import Head from 'next/head';
import LogoBrandContainer from 'pages/components/LogoBrandContainer';
import BlogBanner from 'pages/components/BlogBanner';
import PostLoader from 'pages/posts/components/PostLoader';
import { useRouter } from 'next/router';
import PostHeaderCard from 'pages/posts/components/PostHeaderCard';
import PostBody from 'pages/posts/components/PostBody';

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
                    <PostHeaderCard />
                    <PostBody />
                </PostLoader>
            </main>
        </div>
    );
};

export default Post;
