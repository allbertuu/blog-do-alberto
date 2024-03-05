import IntroBackgroundImage from '@/assets/imgs/intro-background.png';
import Image from 'next/image';

const BlogBanner: React.FC = () => {
  return (
    <Image
      src={IntroBackgroundImage}
      alt="Fundo azul escuro com gradiente muito leve para o branco, com detalhes cinza claro e vermelho claro de barrinhas"
      className="absolute left-0 right-0 top-0 -z-10 h-[18.5rem] w-full object-cover"
      placeholder="blur"
    />
  );
};

export default BlogBanner;
