import { GitHubInfo, Link, LoadingMessage } from '@components/ui';
import Image from 'next/image';
import classNames from '@utils/classNames';
import { useRouter } from 'next/router';
import {
    Calendar as CalendarIcon,
    CaretLeft as CaretLeftIcon,
    ChatCircleDots as ChatCircleDotsIcon,
} from 'phosphor-react';
import { FunctionComponent } from 'react';
import { PostHeaderCardProps } from './types';
import GitHubIcon from '@assets/icons/github.svg';
import GitHubInfoList from '@components/layout/GitHubInfoList';
import formatDateFromDateToNow from '@utils/formatDateFromDateToNow';

/**
 * Cabeçalho do post completo (issue do GitHub)
 */
const PostHeaderCard: FunctionComponent<PostHeaderCardProps> = ({
    postData,
}) => {
    const router = useRouter();
    const { html_url, title, comments, created_at, user } = postData || {};
    /**
     * Retorna para a página anterior na history do navegador.
     */
    const goBack = () => router.back();

    return (
        <div
            className={classNames(
                'py-8 px-6 sm:px-10 bg-blue-600 rounded-xl shadow-lg shadow-black/20',
                'text-blue-50',
            )}
        >
            {postData ? (
                <>
                    <div className="flex justify-between">
                        <Link
                            showIcon
                            iconSide="left"
                            icon={
                                <CaretLeftIcon
                                    size="1.2rem"
                                    weight="fill"
                                    className="-mt-1 -mr-1"
                                />
                            }
                            onClick={goBack}
                            target="_self"
                        >
                            Voltar
                        </Link>

                        <Link showIcon href={html_url}>
                            Ver no GitHub
                        </Link>
                    </div>

                    <h1 className="text-xl sm:text-2xl mt-5 mb-2 font-bold">
                        {title}
                    </h1>

                    <GitHubInfoList className="mt-4">
                        <GitHubInfo
                            info={user?.login}
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
                            info={formatDateFromDateToNow(created_at)}
                            icon={
                                <CalendarIcon
                                    size={'1.2rem'}
                                    weight="fill"
                                    className="text-blue-300"
                                />
                            }
                        />

                        <GitHubInfo
                            info={`${comments} comentários`}
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
            ) : (
                <LoadingMessage message="Buscando informações do post..." />
            )}
        </div>
    );
};

export default PostHeaderCard;
