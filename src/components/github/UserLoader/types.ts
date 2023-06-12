import { ReactNode } from 'react';

export interface UserLoaderProps {
    children: ReactNode;
}

export interface IUserData {
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
