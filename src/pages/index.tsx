import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center py-2">
            <Head>
                <title>Home</title>
            </Head>

            <main>
                Tela inicial
            </main>
        </div>
    );
};

export default Home;
