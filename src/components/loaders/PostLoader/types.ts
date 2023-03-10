import { ReactNode } from 'react';

export interface PostLoaderProps {
    children: ReactNode;
    postId: string | string[] | undefined;
}

export interface IPostData {
    title: string;
    body: string;
    user: {
        login: string;
    };
    html_url: string;
    created_at: string;
    comments: number;
}
