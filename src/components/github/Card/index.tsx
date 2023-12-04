import GitHubIcon from '@assets/icons/github.svg';
import { LoadingMessage } from '@components/index';
import { Link } from '@components/ui';
import API from '@services/api';
import handleFollowersNumber from '@utils/handleFollowersNumber';
import { format } from 'date-fns';
import Image from 'next/image';
import { Buildings as BuildingsIcon, Users as UsersIcon } from 'phosphor-react';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Avatar from '../Avatar';
import GitHubInfo, { InfoList as GitHubInfoList } from '../Info';

export interface IUserData {
  githubUser: string;
  githubUrl: string;
  avatarUrl: string;
  company: string;
  location: string;
  followers: number;
  bio: string;
  name: string;
  createdAt: string;
  website: string;
}

/**
 * Um card com informações do meu perfil do GitHub
 */
const Card: React.FC = () => {
  const [user, setUser] = useState<IUserData | null>(null);

  useEffect(() => {
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
          </>
        );
      }
    };

    getGitHubUser();
  }, []);

  /**
   * Lida com um dado para que seja exibido corretamente na IU.
   */
  const handleInfoDisplayed = (info?: string | number): string =>
    info ? String(info) : 'Sem informação';

  return (
    <div className="relative flex flex-wrap items-center gap-8 rounded-xl bg-blue-600 px-10 py-8 text-blue-50 shadow-lg shadow-black/20 sm:items-stretch">
      {user && (
        <>
          <Avatar imageUrl={user.avatarUrl} />

          <div className="my-1 flex flex-1 flex-col gap-2">
            {/* GitHub User Name and GitHub Links */}
            <div
              className="flex flex-wrap items-center justify-between"
              role={'heading'}
              aria-level={1}
            >
              <h1 className="text-2xl font-bold text-blue-50">
                {handleInfoDisplayed(user.name)}
              </h1>

              <div className="flex gap-2" role={'group'}>
                <Link showIcon href={user.githubUrl} title="GitHub">
                  GitHub
                </Link>
                <Link showIcon href={user.website} title="Website">
                  Website
                </Link>
              </div>
            </div>
            {/* GitHub Bio */}
            <p className="flex-1 text-blue-200">{user.bio}</p>
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
                info={handleInfoDisplayed(user.githubUser)}
              />

              <GitHubInfo
                icon={
                  <BuildingsIcon
                    size={'1.125rem'}
                    weight="fill"
                    className="text-blue-300"
                  />
                }
                info={handleInfoDisplayed(user.company)}
              />

              <GitHubInfo
                icon={
                  <UsersIcon
                    size={'1.125rem'}
                    weight="fill"
                    className="text-blue-300"
                  />
                }
                info={handleFollowersNumber(user.followers)}
              />
            </GitHubInfoList>
          </div>
        </>
      )}
      {!user && <LoadingMessage />}
    </div>
  );
};

export default Card;
