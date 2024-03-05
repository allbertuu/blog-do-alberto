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

const basicHeaders = {
  Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
};

/**
 * Busca por uma issue do repositório `/blog-do-alberto` pelo seu número
 * @param number Número da issue a ser buscada
 */
export const fetchIssue = async (number: string | number) => {
  const res = await fetch(
    `https://api.github.com/repos/allbertuu/blog-do-alberto/issues/${number}}`,
    { headers: basicHeaders }
  );

  if (!res.ok) {
    throw new Error('Não foi possível carregar o post');
  }

  return (await res.json()) as GitHubIssueExtended;
};

export const fetchPosts = async () => {
  const url = new URL('https://api.github.com/search/issues');
  url.searchParams.append('q', 'repo:allbertuu/blog-do-alberto is:issue');
  const res = await fetch(url.href, { headers: basicHeaders });

  if (!res.ok) {
    throw new Error('Não foi possível carregar os posts');
  }

  return (await res.json()) as GitHubIssue[];
};
