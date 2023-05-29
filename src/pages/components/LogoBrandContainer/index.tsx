import { FunctionComponent } from 'react';
import LogoAlbertoDeveloperImage from '@imgs/logo-albertodeveloper.svg';
import Image from 'next/image';
import { LogoBrandContainerProps } from './types';

const LogoBrandContainer: FunctionComponent<LogoBrandContainerProps> = () => {
    return (
        <div className="flex flex-col gap-1 items-center justify-center mt-14 mb-10 relative">
            <Image
                src={LogoAlbertoDeveloperImage}
                alt="Logotipo Website albertodeveloper.com"
            />

            <h1 className="font-titillium font-bold text-blue-50 text-4xl">
                Blog do Alberto
            </h1>
        </div>
    );
};

export default LogoBrandContainer;
