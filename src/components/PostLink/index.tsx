import { IPost } from '@contexts/PostsContext/types';
import formatDateFromDateToNow from '@utils/formatDateFromDateToNow';
import { useRouter } from 'next/router';

export interface PostLinkProps {
  post: IPost;
}

/**
 * Renderiza um card com informações sobre 1 post (GitHub Issues)
 */
export const PostLink: React.FC<PostLinkProps> = ({ post }) => {
  const router = useRouter();
  const { createdAt, body, title, number } = post;

  const handleOnClick = () => {
    router.push(`/posts/${number}`);
  };

  return (
    <div
      role={'link'}
      className="max-h-64 cursor-pointer rounded-xl bg-blue-500 p-8 hover:outline hover:outline-2 hover:outline-red-500"
      onClick={handleOnClick}
    >
      <h1 className="text-xl font-bold text-blue-50">{title}</h1>

      <time className="mb-4 mt-1 block text-sm text-[#7B96B2]">
        Postado {formatDateFromDateToNow(createdAt)}
      </time>

      <div className="overflow-hidden text-ellipsis whitespace-nowrap text-blue-200">
        {body}
      </div>
    </div>
  );
};
