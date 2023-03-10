import Link from '@components/ui/Link';
import Image from 'next/image';
import { FunctionComponent } from 'react';
import {
    Buildings as BuildingsIcon,
    Cake as CakeIcon,
    Users as UsersIcon,
} from 'phosphor-react';
import { GitHubCardProps } from './types';
import classNames from '@utils/classNames';
import GitHubIcon from '@assets/icons/github.svg';
import { GitHubInfo, LoadingMessage } from '@components/ui';
import GitHubInfoList from '@components/layout/GitHubInfoList';
import handleFollowersNumber from '@utils/handleFollowersNumber';
import GitHubAvatar from '@components/GitHubAvatar';

/**
 * Um card com informações do meu perfil do GitHub
 */
const GitHubCard: FunctionComponent<GitHubCardProps> = ({ user }) => {
    const {
        avatar_url,
        bio,
        company,
        created_at,
        followers,
        github_url,
        github_user,
        location,
        name,
        website,
    } = user || {};

    /**
     * Lida com um dado para que seja exibido corretamente na IU.
     */
    const handleInfoDisplayed = (info?: string | number): string =>
        info ? String(info) : 'Sem informação';

    const FOLLOWERS_NUMBER_TEXT = handleFollowersNumber(followers);
    const CREATED_AT_TEXT = created_at
        ? `Criado em ${created_at}`
        : handleInfoDisplayed(created_at);

    return (
        <div
            className={classNames(
                'flex gap-8 flex-wrap relative items-center sm:items-stretch',
                'py-8 px-10 bg-blue-600 rounded-xl shadow-lg shadow-black/20',
                'text-blue-50',
            )}
        >
            {user ? (
                <>
                    <GitHubAvatar imageUrl={avatar_url} />

                    <div className="flex-1 flex flex-col gap-2 my-1">
                        {/* GitHub User Name and GitHub Links */}
                        <div
                            className="flex items-center justify-between flex-wrap"
                            role={'heading'}
                        >
                            <h1 className="text-2xl font-bold text-blue-50">
                                {handleInfoDisplayed(name)}
                            </h1>

                            <div className="flex gap-2" role={'group'}>
                                <Link showIcon href={github_url} title="GitHub">
                                    GitHub
                                </Link>
                                <Link showIcon href={website} title="Website">
                                    Website
                                </Link>
                            </div>
                        </div>
                        {/* GitHub Bio */}
                        <p className="text-blue-200 flex-1">{bio}</p>
                        {/* GitHub Info List about my profile */}
                        <GitHubInfoList className="mt-3 sm:mt-0">
                            <GitHubInfo
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
                                info={handleInfoDisplayed(github_user)}
                            />

                            <GitHubInfo
                                icon={
                                    <BuildingsIcon
                                        size={'1.125rem'}
                                        weight="fill"
                                        className="text-blue-300"
                                    />
                                }
                                info={handleInfoDisplayed(company)}
                            />

                            <GitHubInfo
                                icon={
                                    <UsersIcon
                                        size={'1.125rem'}
                                        weight="fill"
                                        className="text-blue-300"
                                    />
                                }
                                info={FOLLOWERS_NUMBER_TEXT}
                            />

                            <GitHubInfo
                                icon={
                                    <CakeIcon
                                        size={'1.125rem'}
                                        weight="fill"
                                        className="text-blue-300"
                                    />
                                }
                                info={CREATED_AT_TEXT}
                            />
                        </GitHubInfoList>
                    </div>
                </>
            ) : (
                <LoadingMessage />
            )}
        </div>
    );
};

export default GitHubCard;
