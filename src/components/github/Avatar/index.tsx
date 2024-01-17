import Image from 'next/image';
import { Tooltip } from '@components/ui';
import { FunctionComponent } from 'react';
import { AvatarProps } from './types';
import { useRouter } from 'next/router';

const Avatar: FunctionComponent<AvatarProps> = ({ imageUrl }) => {
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
        className="mx-auto w-3/4 cursor-pointer rounded-xl sm:max-w-[7.8125rem]"
        width={460}
        height={460}
        onClick={() => handleImageClick()}
      />
    </Tooltip>
  );
};

export default Avatar;
