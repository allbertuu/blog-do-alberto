import { LoadingMessage } from '@components/index';
import { Markdown } from '@components/lib/Markdown';
import { PostBodyProps } from './types';

/**
 * Corpo do post completo (issue do GitHub)
 */
const PostBody: React.FC<PostBodyProps> = ({ postData }) => {
    const DEFAULT_BODY = '### Sem dados para exibir.';

    return (
        <div className="py-8 sm:px-10">
            {postData && (
                <Markdown className="prose prose-invert">
                    {postData.body || DEFAULT_BODY}
                </Markdown>
            )}
            {!postData && (
                <LoadingMessage message="Buscando conteúdo do post..." />
            )}
        </div>
    );
};

export default PostBody;
