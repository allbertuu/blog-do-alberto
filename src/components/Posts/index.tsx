import Post from '@components/Post';
import { IPost } from '@contexts/PostsContext/types';
import usePosts from '@hooks/usePosts';
import { FunctionComponent } from 'react';
import { PostsProps } from './types';

/**
 * Renderiza a lista de posts/publicações (GitHub Issues)
 */
const Posts: FunctionComponent<PostsProps> = () => {
    const { posts, searchValue } = usePosts();

    const filteredPostsBySearch = posts.filter((post) =>
        post.title.toLocaleLowerCase().startsWith(searchValue.toLowerCase()),
    );
    /** Função para controle das renderizações dos posts */
    const renderPosts = (arr: IPost[]) =>
        arr.map((post) => <Post key={post.id} postInfos={post} />);

    const renderedPosts = searchValue
        ? renderPosts(filteredPostsBySearch)
        : renderPosts(posts);

    return <section className="grid grid-cols-1 sm:grid-cols-2">{renderedPosts}</section>;
};

export default Posts;
