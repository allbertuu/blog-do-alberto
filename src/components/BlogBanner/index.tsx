import { FunctionComponent } from 'react';
import { BlogBannerProps } from './types';
import IntroBackgroundImage from '@imgs/intro-background.png';
import Image from 'next/image';

const BlogBanner: FunctionComponent<BlogBannerProps> = () => {
    return (
        <Image
            src={IntroBackgroundImage}
            alt="Banner Blog do Alberto"
            className="absolute top-0 left-0 right-0 -z-10 h-[18.5rem] w-full object-cover"
            width={1440}
            height={296}
        />
    );
};

export default BlogBanner;
