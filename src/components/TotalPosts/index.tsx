import { usePosts } from '@hooks/index';

/**
 * Renderiza o total de posts/publicações (GitHub Issues), formatado em texto
 */
const TotalPosts: React.FC = () => {
  const { totalPosts } = usePosts();

  return (
    <p className="text-lg text-[#7B96B2]">
      <span>{totalPosts}</span>{' '}
      {totalPosts === 1 ? 'publicação' : 'publicações'}
    </p>
  );
};

export default TotalPosts;
