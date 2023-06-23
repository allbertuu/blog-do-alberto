import { LoadingMessage } from '@components/index';
import { Link } from '@components/ui/index';
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
import { GitHubInfoList, GitHubInfo } from '@components/github';
import formatDateFromDateToNow from '@utils/formatDateFromDateToNow';

/**
 * Cabeçalho do post completo (issue do GitHub)
 */
const PostHeaderCard: FunctionComponent<PostHeaderCardProps> = ({
    postData,
}) => {
    const router = useRouter();
    const {
        html_url: htmlUrl,
        title,
        comments,
        created_at: createdAt,
        user,
    } = postData || {};
    /**
     * Retorna para a página anterior na history do navegador.
     */
    const goBack = () => router.back();

    return (
        <div
            className={classNames(
                'rounded-xl bg-blue-600 py-8 px-6 shadow-lg shadow-black/20 sm:px-10',
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

                        <Link showIcon href={htmlUrl}>
                            Ver no GitHub
                        </Link>
                    </div>

                    <h1 className="mt-5 mb-2 text-xl font-bold sm:text-2xl">
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
                            info={formatDateFromDateToNow(createdAt)}
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
