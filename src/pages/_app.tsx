import { PostsProvider } from '@contexts/PostsContext';
import * as RTooltip from '@radix-ui/react-tooltip';
import '@styles/globals.css';
import type { AppProps } from 'next/app';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <ToastContainer
                position="top-left"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />

            <PostsProvider>
                <RTooltip.Provider delayDuration={50}>
                    <Component {...pageProps} />
                </RTooltip.Provider>
            </PostsProvider>
        </>
    );
}

export default MyApp;
