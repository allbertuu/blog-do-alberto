import API from '@services/api';
import { createContext, useCallback, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { IPostsContext, IPostsProvider, TAPIPosts } from './types';

export const PostsContext = createContext({} as IPostsContext);

export function PostsProvider({ children }: IPostsProvider) {
  const [posts, setPosts] = useState<TAPIPosts>([]);

  const getPosts = useCallback(async () => {
    try {
      const res = await API.get('/search/issues', {
        params: { q: 'repo:allbertuu/blog-do-alberto' },
      });
      // TODO: usar graphQL para filtrar os dados
      // Filtra os dados para pegar apenas os posts (issues) e não os pull requests
      const filteredPosts = res.data.items
        .filter((item: any) => !Object.hasOwn(item, 'pull_request'))
        .map((post: any) => {
          return {
            id: post.id,
            title: post.title,
            body: post.body,
            createdAt: post.created_at,
            number: post.number,
          };
        });
      setPosts(filteredPosts);
    } catch (error: any) {
      toast.error(
        <>
          Eita! Algo deu errado ao puxar todas postagens! 🤯
          <br />
          <small>{error.message}</small>
        </>
      );
    }
  }, []);

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <PostsContext.Provider
      value={{
        posts,
        setPosts,
        getPosts,
        totalPosts: posts.length,
      }}
    >
      {children}
    </PostsContext.Provider>
  );
}
