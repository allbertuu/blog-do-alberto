import ReactMarkdown from '@components/lib/ReactMarkdown';
import { FunctionComponent } from 'react';
import { PostCardProps } from './types';

/**
 * Renderiza um card com informações sobre 1 post (GitHub Issues)
 */
const PostCard: FunctionComponent<PostCardProps> = ({ post }) => {
    const { created_at, body, title } = post;

    return (
        <article className="p-8 rounded-xl bg-blue-500 hover:outline hover:outline-red-500 hover:outline-2 cursor-pointer max-h-64">
            <div className="flex gap-6 mb-5">
                <h1 className="text-xl text-blue-50 font-bold">{title}</h1>
                <time className="text-sm text-[#7B96B2] mt-1">
                    {created_at}
                </time>
            </div>

            <div className="text-blue-200 text-ellipsis overflow-hidden whitespace-nowrap">
                <ReactMarkdown className="[&_*]:inline-flex">
                    {body}
                </ReactMarkdown>
            </div>
        </article>
    );
};

export default PostCard;
