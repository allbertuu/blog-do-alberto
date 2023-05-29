import React, { useState, useEffect, FunctionComponent } from 'react';
import { IGitHubUserData, GitHubUserLoaderProps } from './types';
import API from '@services/api';
import { format } from 'date-fns';

/**
 * Carrega os dados do meu usuário do GitHub (allbertuu).
 *
 * Utiliza "Container component pattern".
 */
const GitHubUserLoader: FunctionComponent<GitHubUserLoaderProps> = ({
    children,
}) => {
    const [user, setUser] = useState<IGitHubUserData | null>(null);

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
            throw new Error(error);
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

export default GitHubUserLoader;
