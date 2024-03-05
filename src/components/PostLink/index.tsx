import { GitHubIssue } from '@/services/github.api';
import formatDateFromDateToNow from '@/utils/formatDateFromDateToNow';
import Link from 'next/link';

export interface PostLinkProps {
  post: GitHubIssue;
}

/**
 * Renderiza um card com informações sobre 1 post (GitHub Issues)
 */
export const PostLink: React.FC<PostLinkProps> = ({ post }) => {
  const { created_at: createdAt, body, title } = post;

  function replaceSpecialCharacters(str: string) {
    return str
      .replace(/[áàãâä]/g, 'a')
      .replace(/[éèêë]/g, 'e')
      .replace(/[íìîï]/g, 'i')
      .replace(/[óòõôö]/g, 'o')
      .replace(/[úùûü]/g, 'u')
      .replace(/ç/g, 'c')
      .replace(/"|'|!|$|,|:/g, '');
  }

  const urlFriendlyTitle = replaceSpecialCharacters(
    title.replaceAll(' ', '-').toLowerCase()
  );

  return (
    <Link
      href={`/posts/${encodeURIComponent(urlFriendlyTitle)}/${post.number}`}
      className="max-h-64 cursor-pointer rounded-xl bg-blue-500 p-8 hover:outline hover:outline-2 hover:outline-red-500"
    >
      <h1 className="text-xl font-bold text-blue-50">{title}</h1>

      <time className="mb-4 mt-1 block text-sm text-[#7B96B2]">
        Postado {formatDateFromDateToNow(createdAt)}
      </time>

      <div className="overflow-hidden text-ellipsis whitespace-nowrap text-blue-200">
        {body}
      </div>
    </Link>
  );
};
