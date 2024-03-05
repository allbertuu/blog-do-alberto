import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { AvatarProps } from './types';

const Avatar: React.FC<AvatarProps> = ({ imageUrl }) => {
  const router = useRouter();
  const handleImageClick = () => {
    router.push('https://www.instagram.com/albert.vny/');
  };

  return (
    <Image
      // TODO: inserir uma imagem de fallback
      src={imageUrl || ''}
      alt="Foto de perfil do GitHub"
      className="mx-auto w-3/4 cursor-pointer rounded-xl sm:max-w-[7.8125rem]"
      width={460}
      height={460}
      onClick={() => handleImageClick()}
    />
  );
};

export default Avatar;
