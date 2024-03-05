'use client';

import { usePosts } from '@/hooks';
import { PostLink } from './PostLink';

export const Posts = () => {
  const { posts } = usePosts();

  return (
    <section className="grid grid-cols-1 gap-8 sm:grid-cols-2">
      {posts.map((post) => (
        <PostLink key={post.id} post={post} />
      ))}
    </section>
  );
};
