import ReactMarkdown from '@components/lib/ReactMarkdown';
import { useRouter } from 'next/router';
import { FunctionComponent } from 'react';
import { PostCardProps } from './types';

/**
 * Renderiza um card com informações sobre 1 post (GitHub Issues)
 */
const PostCard: FunctionComponent<PostCardProps> = ({ post }) => {
    const router = useRouter();
    const { created_at, body, title, number } = post;

    const handleOnClick = () => {
        router.push(`/posts/${number}`);
    };

    return (
        <div
            role={'link'}
            className="p-8 rounded-xl bg-blue-500 hover:outline hover:outline-red-500 hover:outline-2 cursor-pointer max-h-64"
            onClick={handleOnClick}
        >
            <h1 className="text-xl text-blue-50 font-bold">{title}</h1>
            
            <time className="block text-sm text-[#7B96B2] mt-1 mb-4">
                Postado em {created_at}
            </time>

            <div className="text-blue-200 text-ellipsis overflow-hidden whitespace-nowrap">
                <ReactMarkdown className="[&_*]:inline-flex">
                    {body}
                </ReactMarkdown>
            </div>
        </div>
    );
};

export default PostCard;
