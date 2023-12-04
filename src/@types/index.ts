export type Post = {
  title: string;
  body: string;
  user: {
    login: string;
  };
  html_url: string;
  created_at: string;
  comments: number;
};
