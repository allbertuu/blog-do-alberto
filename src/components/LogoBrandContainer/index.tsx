import LogoPortfolioWebsiteImage from '@/assets/imgs/logo-portfolio-website.svg';
import Image from 'next/image';

const LogoBrandContainer: React.FC = () => {
  return (
    <div className="relative mb-10 mt-14 flex flex-col items-center justify-center gap-1">
      <Image
        src={LogoPortfolioWebsiteImage}
        alt="Logotipo Website albertosantos.dev"
      />

      <h1 className="font-titillium text-4xl font-bold text-blue-50">
        Blog do Alberto
      </h1>
    </div>
  );
};

export default LogoBrandContainer;
