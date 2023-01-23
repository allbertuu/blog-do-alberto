import Post from '@components/Post';
import usePosts from '@hooks/usePosts';
import { FunctionComponent } from 'react';
import { PostsProps } from './types';

/**
 * Renderiza a lista de posts/publicações (GitHub Issues)
 */
const Posts: FunctionComponent<PostsProps> = () => {
    const { posts } = usePosts();

    return (
        <section className="grid grid-cols-1 sm:grid-cols-2">
            {posts.map((post) => (
                <Post key={post.id} postInfos={post} />
            ))}
        </section>
    );
};

export default Posts;
