import { LoadingMessage } from '@components/index';
import { Markdown } from '@components/lib/Markdown';
import { GitHubIssueExtended, fetchIssue } from '@services/github.api';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

/**
 * Corpo do post completo (issue do GitHub)
 */
export const PostBody: React.FC = () => {
  const DEFAULT_BODY = '### Sem dados para exibir.';

  const [post, setPost] = useState<GitHubIssueExtended | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const handleFetchIssue = async () => {
      const query = router.query.postTitle;
      if (!query) return;

      const issueNumber = query[1];

      try {
        const data = await fetchIssue(issueNumber);
        setPost(data);
      } catch (e: any) {
        toast.error(
          <>
            Ish! Não deu pra acessar esse! 😞
            <br />
            <small>{e.message}</small>
          </>
        );
      } finally {
        setLoading(false);
      }
    };

    handleFetchIssue();
  }, [router.query.postTitle]);

  return (
    <div className="py-8 sm:px-10">
      {post && (
        <Markdown className="prose prose-invert max-w-full prose-headings:border-b prose-headings:border-b-blue-300 prose-a:text-red-500/95 hover:prose-a:text-red-500/80 prose-blockquote:text-[#ffffff91] prose-pre:bg-[#22272e] prose-img:w-[75%]">
          {post.body || DEFAULT_BODY}
        </Markdown>
      )}
      {loading && <LoadingMessage message="Buscando conteúdo do post..." />}
      {!loading && !post && 'Não foi possível carregar o post.'}
    </div>
  );
};
