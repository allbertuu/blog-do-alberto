import API from '@services/api';
import { format } from 'date-fns';
import React, { FunctionComponent, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { IUserData, UserLoaderProps } from './types';

/**
 * Carrega os dados do meu usuário do GitHub (allbertuu).
 *
 * Utiliza "Container component pattern".
 */
const UserLoader: FunctionComponent<UserLoaderProps> = ({ children }) => {
    const [user, setUser] = useState<IUserData | null>(null);

    const getGitHubUser = async () => {
        try {
            const res = await API.get('users/allbertuu');
            setUser({
                avatarUrl: res.data.avatar_url,
                bio: res.data.bio,
                company: res.data.company,
                followers: res.data.followers,
                githubUrl: res.data.html_url,
                githubUser: res.data.login,
                location: res.data.location,
                name: res.data.name,
                createdAt: format(new Date(res.data.created_at), 'MM/yyyy'),
                website: res.data.blog,
            });
        } catch (error: any) {
            toast.error(
                <>
                    Não entendi, não carregou minhas informações 😥
                    <br />
                    <small>{error.message}</small>
                </>,
            );
        }
    };

    useEffect(() => {
        getGitHubUser();
    }, []);

    return (
        <>
            {React.Children.map(children, (child) => {
                if (React.isValidElement(child)) {
                    // @ts-ignore
                    return React.cloneElement(child, { user });
                }
                return child;
            })}
        </>
    );
};

export default UserLoader;
