import { ReactNode } from 'react';

export interface GitHubUserLoaderProps {
    children: ReactNode;
}

export interface IGitHubUserData {
    githubUser: string;
    githubUrl: string;
    avatarUrl: string;
    company: string;
    location: string;
    followers: number;
    bio: string;
    name: string;
    createdAt: string;
    website: string;
}
