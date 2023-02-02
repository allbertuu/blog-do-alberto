import { ReactNode } from 'react';
/** Tipo da resposta da API  */
export type TAPIPosts = IPost[] | [];

export interface IPostsProvider {
    children: ReactNode;
}

export interface IPostsContext {
    posts: TAPIPosts;
    setPosts: React.Dispatch<React.SetStateAction<TAPIPosts>>;
    totalPosts: number;
    getPosts(): Promise<void>;
}

export interface IPost {
    id: number;
    number: number;
    title: string;
    body: string;
    created_at: string;
}
