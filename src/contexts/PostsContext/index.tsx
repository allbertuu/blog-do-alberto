import API from '@services/api';
import formatDate from '@utils/formatDate';
import React, { createContext, useEffect, useState } from 'react';
import { IPostsContext, IPostsProvider, TAPIPosts } from './types';

export const PostsContext = createContext({} as IPostsContext);

export function PostsProvider({ children }: IPostsProvider) {
    const [posts, setPosts] = useState<TAPIPosts>([]);

    const getPosts = async () => {
        try {
            const res = await API.get('/search/issues', {
                params: { q: 'repo:allbertuu/blog-do-alberto' },
            });
            // TODO: usar graphQL para filtrar os dados
            const filteredPosts = res.data.items.map((post: any) => {
                return {
                    id: post.id,
                    title: post.title,
                    body: post.body,
                    created_at: formatDate(post.created_at),
                };
            });
            setPosts(filteredPosts);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getPosts();
    }, []);

    return (
        <PostsContext.Provider
            value={{
                posts,
                setPosts,
                totalPosts: posts.length,
                getPosts,
            }}
        >
            {children}
        </PostsContext.Provider>
    );
}
