import GitHubIcon from '@assets/icons/github.svg';
import { GitHubInfo, GitHubInfoList } from '@components/github';
import { LoadingMessage } from '@components/index';
import { Link } from '@components/ui/index';
import API from '@services/api';
import { Post } from '@types';
import formatDateFromDateToNow from '@utils/formatDateFromDateToNow';
import Image from 'next/image';
import { useRouter } from 'next/router';
import {
  Calendar as CalendarIcon,
  CaretLeft as CaretLeftIcon,
  ChatCircleDots as ChatCircleDotsIcon,
} from 'phosphor-react';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

/**
 * Cabeçalho do post completo (issue do GitHub)
 */
export const PostHeader: React.FC = () => {
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { postId } = router.query;

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await API.get(
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

  /**
   * Retorna para a página anterior na history do navegador.
   */
  const goBack = () => router.back();

  return (
    <div className="rounded-xl bg-blue-600 px-6 py-8 text-blue-50 shadow-lg shadow-black/20 sm:px-10">
      {post && (
        <>
          <div className="flex justify-between">
            <Link
              showIcon
              iconSide="left"
              icon={
                <CaretLeftIcon
                  size="1.2rem"
                  weight="fill"
                  className="-mr-1 -mt-1"
                />
              }
              onClick={goBack}
              target="_self"
            >
              Voltar
            </Link>

            <Link showIcon href={post.html_url}>
              Comente ou reaja aqui 👍
            </Link>
          </div>

          <h1 className="mb-2 mt-5 text-xl font-bold sm:text-2xl">
            {post.title}
          </h1>

          <GitHubInfoList className="mt-4">
            <GitHubInfo
              info="allbertuu"
              icon={
                <Image
                  src={GitHubIcon}
                  alt="Ícone do GitHub"
                  width={18}
                  height={18}
                  title="GitHub"
                  className="w-[1.125rem]"
                />
              }
            />

            <GitHubInfo
              info={formatDateFromDateToNow(post.created_at)}
              icon={
                <CalendarIcon
                  size={'1.2rem'}
                  weight="fill"
                  className="text-blue-300"
                />
              }
            />

            <GitHubInfo
              info={`${post.comments} comentários`}
              icon={
                <ChatCircleDotsIcon
                  size={'1.2rem'}
                  weight="fill"
                  className="text-blue-300"
                />
              }
            />
          </GitHubInfoList>
        </>
      )}
      {loading && <LoadingMessage message="Buscando informações do post..." />}
    </div>
  );
};
