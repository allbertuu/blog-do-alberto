import { LoadingMessage } from '@components/index';
import classNames from '@utils/classNames';
import { FunctionComponent } from 'react';
import { PostBodyProps } from './types';
import { ReactMarkdown } from '@components/lib/index';

/**
 * Corpo do post completo (issue do GitHub)
 */
const PostBody: FunctionComponent<PostBodyProps> = ({ postData }) => {
    const { body } = postData || {};
    const DEFAULT_BODY = '### Sem dados para exibir.';
    const REACT_MARKDOWN_STYLES =
        '[&_h2]:font-bold [&_h2]:text-2xl [&_h2]:mb-2 [&_h2]:mt-6 lg:[&_h2]:mt-8 [&_h3]:font-bold [&_h3]:text-lg [&_h3]:mt-4 [&_p]:mb-2 [&_a]:text-red-500 [&_a]:underline [&_blockquote]:before:absolute [&_blockquote]:before:bg-red-500 [&_blockquote]:before:w-1 [&_blockquote>p]:before:mr-3 [&_blockquote]:before:h-full [&_blockquote]:relative [&_blockquote]:italic [&_blockquote]:text-blue-100';

    return (
        <div className={classNames('py-8 sm:px-10')}>
            {postData ? (
                <ReactMarkdown className={REACT_MARKDOWN_STYLES}>
                    {body || DEFAULT_BODY}
                </ReactMarkdown>
            ) : (
                <LoadingMessage message="Buscando conteúdo do post..." />
            )}
        </div>
    );
};

export default PostBody;
