import { GitHubIssue } from '@/services/github.api';
import { Dispatch, ReactNode, SetStateAction } from 'react';

export interface IPostsProvider {
  children: ReactNode;
}

export interface IPostsContext {
  posts: GitHubIssue[] | [];
  setPosts: Dispatch<SetStateAction<GitHubIssue[] | []>>;
  getPosts: () => Promise<void>;
  totalPosts: number;
}
