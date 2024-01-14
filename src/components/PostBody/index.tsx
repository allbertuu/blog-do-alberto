import { LoadingMessage } from '@components/index';
import { Markdown } from '@components/lib/Markdown';
import { GitHubAPI } from '@services/github.api';
import { Post } from '@types';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

/**
 * Corpo do post completo (issue do GitHub)
 */
export const PostBody: React.FC = () => {
  const DEFAULT_BODY = '### Sem dados para exibir.';

  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { postId } = router.query;

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await GitHubAPI.get(
          `/repos/allbertuu/blog-do-alberto/issues/${postId}`
        );
        setPost(res.data);
      } catch (error: any) {
        toast.error(
          <>
            Algo deu errado. Não deu pra pegar o post de nº {postId} 😞
            <br />
            <small>{error.message}</small>
          </>
        );
      } finally {
        setLoading(false);
      }
    };

    if (postId) fetchPost();
  }, [postId]);

  return (
    <div className="py-8 sm:px-10">
      {post && (
        <Markdown className="prose prose-invert max-w-full prose-headings:border-b prose-headings:border-b-blue-300 prose-a:text-red-500/95 hover:prose-a:text-red-500/80 prose-blockquote:text-[#ffffff91] prose-img:w-[75%]">
          {post.body || DEFAULT_BODY}
        </Markdown>
      )}
      {loading && <LoadingMessage message="Buscando conteúdo do post..." />}
      {!loading && !post && 'Não foi possível carregar o post.'}
    </div>
  );
};
