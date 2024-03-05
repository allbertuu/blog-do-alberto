import { PostLink } from '@components/PostLink';
import { usePosts } from '@hooks/index';
import { FunctionComponent } from 'react';

export type PostsSectionProps = React.HTMLAttributes<HTMLElement>;

/**
 * Renderiza a lista de posts/publicações (GitHub Issues)
 */
export const PostsSection: FunctionComponent<PostsSectionProps> = ({
  ...props
}) => {
  const { posts } = usePosts();

  return (
    <section {...props} className="grid grid-cols-1 gap-8 sm:grid-cols-2">
      {posts.map((post) => (
        <PostLink key={post.id} post={post} />
      ))}
    </section>
  );
};
