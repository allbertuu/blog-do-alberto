import PostCard from '@components/PostCard';
import usePosts from '@hooks/usePosts';
import { FunctionComponent } from 'react';
import { PostsSectionProps } from './types';

/**
 * Renderiza a lista de posts/publicações (GitHub Issues)
 */
const PostsSection: FunctionComponent<PostsSectionProps> = ({ ...props }) => {
    const { posts } = usePosts();

    return (
        <section {...props} className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {posts.map((post) => (
                <PostCard key={post.id} post={post} />
            ))}
        </section>
    );
};

export default PostsSection;
