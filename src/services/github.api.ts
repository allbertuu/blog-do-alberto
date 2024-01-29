import axios from 'axios';

export type GitHubIssueExtended = {
  title: string;
  body: string;
  user: {
    login: string;
  };
  html_url: string;
  created_at: string;
  comments: number;
};

export interface GitHubIssue {
  id: number;
  number: number;
  title: string;
  body: string;
  created_at: string;
}

export const GitHubAPI = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
  },
});

/**
 * Busca por uma issue do repositório `/blog-do-alberto` pelo seu número
 * @param number Número da issue a ser buscada
 */
export const fetchIssue = async (number: string | number) => {
  const res = await GitHubAPI.get(
    `/repos/allbertuu/blog-do-alberto/issues/${number}}`
  );
  return res.data as GitHubIssueExtended;
};
