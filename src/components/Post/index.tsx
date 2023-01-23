import ReactMarkdown from '@components/lib/ReactMarkdown';
import { FunctionComponent } from 'react';
import { PostProps } from './types';

/**
 * Renderiza um card com informações sobre 1 post (GitHub Issues)
 */
const Post: FunctionComponent<PostProps> = ({ postInfos: post }) => {
    return (
        <article className="p-8 rounded-xl bg-blue-500 hover:outline hover:outline-red-500 hover:outline-2 cursor-pointer max-h-64">
            <div className="flex gap-6 mb-5">
                <h1 className="text-xl text-blue-50 font-bold">{post.title}</h1>
                <time className="text-sm text-[#7B96B2] mt-1">
                    {post.created_at}
                </time>
            </div>

            <div className="text-blue-200 text-ellipsis overflow-hidden whitespace-nowrap">
                <ReactMarkdown className="[&_*]:inline-flex">
                    {post.body}
                </ReactMarkdown>
            </div>
        </article>
    );
};

export default Post;
