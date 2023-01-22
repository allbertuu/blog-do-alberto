import GitHubCard from '@components/GitHubProfile';
import Posts from '@components/Posts';
import SearchInput from '@components/SearchInput';
import TotalPosts from '@components/TotalPosts';
import IntroBackgroundImage from '@imgs/intro-background.png';
import LogoAlbertoDeveloperImage from '@imgs/logo-albertodeveloper.svg';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>
                    Blog do Alberto | Onde você experimenta minha mente
                </title>
            </Head>

            <Image
                src={IntroBackgroundImage}
                alt="Banner Blog do Alberto"
                className="w-full h-[18.5rem] object-cover absolute -z-10 top-0 left-0 right-0"
                width={1440}
                height={296}
            />

            <main className="mx-auto w-full max-w-4xl px-6 pb-40">
                {/* Logo Brand Container */}
                <div className="flex flex-col gap-1 items-center justify-center mt-14 mb-10 relative">
                    <Image
                        src={LogoAlbertoDeveloperImage}
                        alt="Logotipo Website albertodeveloper.com"
                    />

                    <h1 className="font-titillium font-bold text-blue-50 text-4xl">
                        Blog do Alberto
                    </h1>
                </div>
                {/* Card GitHub Profile */}
                <GitHubCard />
                {/* Header Posts List */}
                <div className="flex justify-between flex-1 font-bold mt-16 mb-2">
                    <h1 className="text-blue-100 text-2xl">Publicações</h1>
                    <TotalPosts />
                </div>
                {/* Input Filter by Search */}
                <SearchInput className="mb-12 w-full" />
                {/* Posts List */}
                <Posts />
            </main>
        </div>
    );
};

export default Home;
