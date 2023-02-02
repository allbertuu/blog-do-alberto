import { ReactNode } from 'react';

export interface PostLoaderProps {
    children: ReactNode;
    postId: string | string[] | undefined;
}
