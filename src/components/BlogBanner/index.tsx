import IntroBackgroundImage from '@imgs/intro-background.png';
import Image from 'next/image';

const BlogBanner: React.FC = () => {
  return (
    <Image
      src={IntroBackgroundImage}
      alt="Banner Blog do Alberto"
      className="absolute left-0 right-0 top-0 -z-10 h-[18.5rem] w-full object-cover"
      width={1440}
      height={296}
    />
  );
};

export default BlogBanner;
