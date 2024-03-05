'use client';

import { usePosts } from '@/hooks';

export const TotalPosts = () => {
  const { posts } = usePosts();

  return (
    <p className="text-lg text-[#7B96B2]">
      <span>{posts.length}</span>{' '}
      {posts.length === 1 ? 'publicação' : 'publicações'}
    </p>
  );
};
