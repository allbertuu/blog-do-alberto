import { ReactNode } from 'react';

export interface GitHubUserLoaderProps {
    children: ReactNode;
}

export interface IGitHubUserData {
    github_user: string;
    github_url: string;
    avatar_url: string;
    company: string;
    location: string;
    followers: number;
    bio: string;
    name: string;
    created_at: string;
    website: string;
}
