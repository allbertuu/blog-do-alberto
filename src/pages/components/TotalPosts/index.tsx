import { usePosts } from '@hooks/index';
import { FunctionComponent } from 'react';

/**
 * Renderiza o total de posts/publicações (GitHub Issues), formatado em texto
 */
const TotalPosts: FunctionComponent = () => {
    const { totalPosts } = usePosts();

    return (
        <p className="text-[#7B96B2] text-lg">
            <span>{totalPosts}</span>{' '}
            {totalPosts === 1 ? 'publicação' : 'publicações'}
        </p>
    );
};

export default TotalPosts;
