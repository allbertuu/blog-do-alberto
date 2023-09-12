import ReactMarkdown from '@components/lib/ReactMarkdown';
import { useRouter } from 'next/router';
import { FunctionComponent } from 'react';
import { PostCardProps } from './types';
import formatDateFromDateToNow from '@utils/formatDateFromDateToNow';

/**
 * Renderiza um card com informações sobre 1 post (GitHub Issues)
 */
const PostCard: FunctionComponent<PostCardProps> = ({ post }) => {
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

            <time className="mt-1 mb-4 block text-sm text-[#7B96B2]">
                Postado {formatDateFromDateToNow(createdAt)}
            </time>

            <div className="overflow-hidden text-ellipsis whitespace-nowrap text-blue-200">
                <ReactMarkdown className="[&_*]:inline-flex">
                    {body}
                </ReactMarkdown>
            </div>
        </div>
    );
};

export default PostCard;
