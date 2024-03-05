'use client';

import { GitHubInfo, GitHubInfoList } from '@/components/github';
import { LoadingMessage } from '@/components/index';
import { ExternalLink } from '@/components/ui/index';
import { GitHubIssueExtended, fetchIssue } from '@/services/github.api';
import formatDateFromDateToNow from '@/utils/formatDateFromDateToNow';
import {
  Calendar as CalendarIcon,
  CaretLeft as CaretLeftIcon,
  ChatCircleDots as ChatCircleDotsIcon,
  Timer as TimerIcon,
} from '@phosphor-icons/react/dist/ssr';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import readingTime from 'reading-time';

/**
 * Cabeçalho do post completo (issue do GitHub)
 */
export const PostHeader: React.FC = () => {
  const [post, setPost] = useState<GitHubIssueExtended | null>(null);
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    const handleFetchIssue = async () => {
      const issueNumber = pathname.split('/')[3];

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
  }, [pathname]);

  const { minutes } = readingTime(post?.body || '');
  const readingTimeInMinutes = Math.ceil(minutes);

  return (
    <div className="mx-auto w-full max-w-lg rounded-xl bg-blue-600 px-6 py-8 text-blue-50 shadow-lg shadow-black/20 sm:px-10">
      {post && (
        <>
          <div className="flex flex-wrap justify-between gap-2">
            <ExternalLink
              showIcon
              iconSide="left"
              icon={
                <CaretLeftIcon
                  size="1.2rem"
                  weight="fill"
                  className="-mr-1 -mt-1"
                />
              }
              href="/"
              target="_self"
            >
              Tela inicial
            </ExternalLink>

            <ExternalLink showIcon href={post.html_url}>
              Comente ou reaja aqui 👍
            </ExternalLink>
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
