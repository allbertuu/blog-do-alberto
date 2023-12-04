import { FunctionComponent } from 'react';
import LogoAlbertoDeveloperImage from '@imgs/logo-albertodeveloper.svg';
import Image from 'next/image';
import { LogoBrandContainerProps } from './types';

const LogoBrandContainer: FunctionComponent<LogoBrandContainerProps> = () => {
  return (
    <div className="relative mb-10 mt-14 flex flex-col items-center justify-center gap-1">
      <Image
        src={LogoAlbertoDeveloperImage}
        alt="Logotipo Website albertodeveloper.com"
      />

      <h1 className="font-titillium text-4xl font-bold text-blue-50">
        Blog do Alberto
      </h1>
    </div>
  );
};

export default LogoBrandContainer;
