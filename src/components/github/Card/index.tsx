import Image from 'next/image';
import { FunctionComponent } from 'react';
import {
    Buildings as BuildingsIcon,
    // Cake as CakeIcon,
    Users as UsersIcon,
} from 'phosphor-react';
import { CardProps } from './types';
import classNames from '@utils/classNames';
import GitHubIcon from '@assets/icons/github.svg';
import handleFollowersNumber from '@utils/handleFollowersNumber';
import { LoadingMessage } from '@components/index';
import { Link } from '@components/ui';
import Avatar from '../Avatar';
import GitHubInfo, { InfoList as GitHubInfoList } from '../Info';

/**
 * Um card com informações do meu perfil do GitHub
 */
const Card: FunctionComponent<CardProps> = ({ user }) => {
    const {
        avatarUrl,
        bio,
        company,
        followers,
        githubUrl,
        githubUser,
        name,
        website,
    } = user || {};

    /**
     * Lida com um dado para que seja exibido corretamente na IU.
     */
    const handleInfoDisplayed = (info?: string | number): string =>
        info ? String(info) : 'Sem informação';

    const FOLLOWERS_NUMBER_TEXT = handleFollowersNumber(followers);
    // const CREATED_AT_TEXT = created_at
    //     ? `GitHub criado em ${created_at}`
    //     : handleInfoDisplayed(created_at);

    return (
        <div
            className={classNames(
                'relative flex flex-wrap items-center gap-8 sm:items-stretch',
                'rounded-xl bg-blue-600 py-8 px-10 shadow-lg shadow-black/20',
                'text-blue-50',
            )}
        >
            {user ? (
                <>
                    <Avatar imageUrl={avatarUrl} />

                    <div className="my-1 flex flex-1 flex-col gap-2">
                        {/* GitHub User Name and GitHub Links */}
                        <div
                            className="flex flex-wrap items-center justify-between"
                            role={'heading'}
                            aria-level={1}
                        >
                            <h1 className="text-2xl font-bold text-blue-50">
                                {handleInfoDisplayed(name)}
                            </h1>

                            <div className="flex gap-2" role={'group'}>
                                <Link showIcon href={githubUrl} title="GitHub">
                                    GitHub
                                </Link>
                                <Link showIcon href={website} title="Website">
                                    Website
                                </Link>
                            </div>
                        </div>
                        {/* GitHub Bio */}
                        <p className="flex-1 text-blue-200">{bio}</p>
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
                                info={handleInfoDisplayed(githubUser)}
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

                            {/* <GitHubInfo
                                icon={
                                    <CakeIcon
                                        size={'1.125rem'}
                                        weight="fill"
                                        className="text-blue-300"
                                    />
                                }
                                info={CREATED_AT_TEXT}
                            /> */}
                        </GitHubInfoList>
                    </div>
                </>
            ) : (
                <LoadingMessage />
            )}
        </div>
    );
};

export default Card;
