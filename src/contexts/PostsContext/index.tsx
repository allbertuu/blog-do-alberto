import { GitHubAPI } from '@services/github.api';
import { createContext, useCallback, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { IPostsContext, IPostsProvider, TAPIPosts } from './types';

export const PostsContext = createContext({} as IPostsContext);

export function PostsProvider({ children }: IPostsProvider) {
  const [posts, setPosts] = useState<TAPIPosts>([]);

  const getPosts = useCallback(async () => {
    try {
      const res = await GitHubAPI.get('/search/issues', {
        params: { q: 'repo:allbertuu/blog-do-alberto is:issue' },
      });
      setPosts(res.data.items);
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
