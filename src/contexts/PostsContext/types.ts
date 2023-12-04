import { Dispatch, ReactNode, SetStateAction } from 'react';

export interface IPost {
    id: number;
    number: number;
    title: string;
    body: string;
    createdAt: string;
}

/** Tipo da resposta da API  */
export type TAPIPosts = IPost[] | [];

export interface IPostsProvider {
    children: ReactNode;
}

export interface IPostsContext {
    posts: TAPIPosts;
    setPosts: Dispatch<SetStateAction<TAPIPosts>>;
    totalPosts: number;
}
