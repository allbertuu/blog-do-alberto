import { PostCard } from '..';
import { usePosts } from '@hooks/index';
import { FunctionComponent } from 'react';
import { PostsSectionProps } from './types';

/**
 * Renderiza a lista de posts/publicações (GitHub Issues)
 */
const PostsSection: FunctionComponent<PostsSectionProps> = ({ ...props }) => {
    const { posts } = usePosts();

    return (
        <section {...props} className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {posts.map((post) => (
                <PostCard key={post.id} post={post} />
            ))}
        </section>
    );
};

export default PostsSection;
