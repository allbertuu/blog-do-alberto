import Image from 'next/image';
import Tooltip from '@components/Tooltip';
import { FunctionComponent } from 'react';
import { GitHubAvatarProps } from './types';
import { useRouter } from 'next/router';

const GitHubAvatar: FunctionComponent<GitHubAvatarProps> = ({ imageUrl }) => {
    const router = useRouter();
    const handleImageClick = () => {
        router.push('https://www.instagram.com/albert.vny/');
    };

    return (
        <Tooltip content="Eu sei que sou lindo tá xD">
            <Image
                // TODO: inserir uma imagem de fallback
                src={imageUrl || ''}
                alt="Foto de perfil do GitHub"
                className="w-full max-w-[7.8125rem] mx-auto rounded-xl cursor-pointer"
                width={460}
                height={460}
                onClick={() => handleImageClick()}
            />
        </Tooltip>
    );
};

export default GitHubAvatar;
