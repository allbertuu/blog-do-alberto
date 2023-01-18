import Link from '@components/ui/Link';
import API from '@services/api';
import Image from 'next/image';
import { FunctionComponent, useEffect, useState } from 'react';
import { format } from 'date-fns';
import {
    Buildings as BuildingsIcon,
    Cake as CakeIcon,
    SpinnerGap as LoadingIcon,
    Users as UsersIcon,
} from 'phosphor-react';
import { GitHubProfileProps, IGitHubUserData } from './types';
import classNames from '@utils/classNames';
import GitHubIcon from '@assets/icons/github.svg';
import { formatNumber } from '@utils/formatNumber';

const GitHubUserInfo: FunctionComponent<any> = ({ children }) => {
    return <span className="flex items-center gap-2">{children}</span>;
};

const GitHubProfile: FunctionComponent<GitHubProfileProps> = () => {
    const [user, setUser] = useState<IGitHubUserData | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    const getGitHubUser = async () => {
        try {
            const res = await API.get('users/allbertuu');
            setUser({
                avatar_url: res.data.avatar_url,
                bio: res.data.bio,
                company: res.data.company,
                followers: res.data.followers,
                github_url: res.data.html_url,
                github_user: res.data.login,
                location: res.data.location,
                name: res.data.name,
                created_at: format(new Date(res.data.created_at), 'MM/yyyy'),
                website: res.data.blog,
            });
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const handleFollowersNumber = (followers?: number) => {
        if (!followers) return 'Não foi possível carregar os seguidores';
        if (followers === 0) return 'Nenhum seguidor';
        return `${formatNumber(followers)} ${
            followers > 1 ? 'seguidores' : 'seguidor'
        }`;
    };

    useEffect(() => {
        getGitHubUser();
    }, []);

    return (
        <div
            role={'group'}
            className={classNames(
                'flex gap-8 flex-wrap relative',
                'py-8 px-10 bg-blue-600 rounded-xl shadow-lg shadow-black/20',
                'text-blue-50',
                'items-center sm:items-stretch',
            )}
        >
            {loading ? (
                <LoadingIcon
                    size="2.5rem"
                    color="#ffffff"
                    className="animate-spin mx-auto w-fit"
                />
            ) : user ? (
                <>
                    {/* GitHub Avatar Profile Image */}
                    <Image
                        src={user.avatar_url || ''}
                        alt="Foto de perfil do GitHub"
                        className="w-full max-w-[120px] mx-auto sm:max-w-[9.25rem] rounded-xl"
                        width={460}
                        height={460}
                    />
                    {/* GitHub User Infos Container */}
                    <div className="flex-1 flex flex-col gap-2 my-1">
                        {/* GitHub User Name and GitHub Links */}
                        <div
                            className="flex items-center justify-between flex-wrap"
                            role={'heading'}
                        >
                            <h1 className="text-2xl font-bold text-blue-50">
                                {user.name || 'Sem nome'}
                            </h1>

                            <div className="flex gap-2">
                                <Link
                                    href={user.github_url || '#'}
                                    title="GitHub"
                                >
                                    GitHub
                                </Link>
                                <Link
                                    href={user.website || '#'}
                                    title="Website"
                                >
                                    Website
                                </Link>
                            </div>
                        </div>
                        {/* GitHub Bio */}
                        <p className="text-blue-200 flex-1">{user.bio}</p>
                        {/* GitHub User Infos Container Row */}
                        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-blue-100 sm:items-end">
                            <GitHubUserInfo>
                                <Image
                                    src={GitHubIcon}
                                    alt="Ícone do GitHub"
                                    width={18}
                                    height={18}
                                    title="GitHub"
                                    className="w-[1.125rem]"
                                />
                                <p>{user.github_user || 'Sem dados'}</p>
                            </GitHubUserInfo>

                            <GitHubUserInfo>
                                <BuildingsIcon
                                    size={'1.125rem'}
                                    weight="fill"
                                    className="text-blue-300"
                                />
                                <p>{user.company || 'Sem dados'}</p>
                            </GitHubUserInfo>

                            <GitHubUserInfo>
                                <UsersIcon
                                    size={'1.125rem'}
                                    weight="fill"
                                    className="text-blue-300"
                                />
                                <p>{handleFollowersNumber(user.followers)}</p>
                            </GitHubUserInfo>

                            <GitHubUserInfo>
                                <CakeIcon
                                    size={'1.125rem'}
                                    weight="fill"
                                    className="text-blue-300"
                                />
                                <p>Criado em {user.created_at}</p>
                            </GitHubUserInfo>
                        </div>
                    </div>
                </>
            ) : (
                <h1>Não foi possível carregar os dados do usuário.</h1>
            )}
        </div>
    );
};

export default GitHubProfile;
