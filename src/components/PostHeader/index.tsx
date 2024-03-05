import { GitHubInfo, GitHubInfoList } from '@components/github';
import { LoadingMessage } from '@components/index';
import { Link } from '@components/ui/index';
import { GitHubIssueExtended, fetchIssue } from '@services/github.api';
import formatDateFromDateToNow from '@utils/formatDateFromDateToNow';
import { useRouter } from 'next/router';
import {
  Calendar as CalendarIcon,
  CaretLeft as CaretLeftIcon,
  ChatCircleDots as ChatCircleDotsIcon,
  Timer as TimerIcon,
} from 'phosphor-react';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import readingTime from 'reading-time';

/**
 * Cabeçalho do post completo (issue do GitHub)
 */
export const PostHeader: React.FC = () => {
  const [post, setPost] = useState<GitHubIssueExtended | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const handleFetchIssue = async () => {
    const query = router.query.postTitle;
    if (!query) return;

    const issueNumber = query[1];

    try {
      const data = await fetchIssue(issueNumber);
      setPost(data);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
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

  useEffect(() => {
    handleFetchIssue();
  }, [router.query.postTitle]);

  /**
   * Retorna para a página anterior na history do navegador.
   */
  const goBack = () => router.back();

  const { minutes } = readingTime(post?.body || '');
  const readingTimeInMinutes = Math.ceil(minutes);

  return (
    <div className="mx-auto w-full max-w-lg rounded-xl bg-blue-600 px-6 py-8 text-blue-50 shadow-lg shadow-black/20 sm:px-10">
      {post && (
        <>
          <div className="flex flex-wrap justify-between gap-2">
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

          <h1 className="mb-2 mt-5 break-words text-xl font-bold sm:text-2xl">
            {post.title}
          </h1>

          <GitHubInfoList className="mt-4">
            {/* TODO: No futuro, pode ser que tenha mais pessoas me ajudando.
             // Se quiser fazer parte disso, me mande uma mensagem no LinkedIn.
             // https://www.linkedin.com/in/albertov-albuquerque/ 
              */}
            {/* <GitHubInfo
              info={`Autor: ${post.user.login}`}
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
            /> */}

            <GitHubInfo
              info={`Leitura de aproximadamente ${readingTimeInMinutes} minutos ☕️`}
              icon={
                <TimerIcon
                  size={'1.2rem'}
                  weight="fill"
                  className="text-blue-300"
                />
              }
            />

            <GitHubInfo
              info={`Postado ${formatDateFromDateToNow(post.created_at)}`}
              icon={
                <CalendarIcon
                  size={'1.2rem'}
                  weight="fill"
                  className="text-blue-300"
                />
              }
            />

            <GitHubInfo
              info={`${post.comments} comentário${
                post.comments > 1 || post.comments === 0 ? 's' : ''
              }`}
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
