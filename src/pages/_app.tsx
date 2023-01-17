import * as RTooltip from '@radix-ui/react-tooltip';
import '@styles/globals.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <RTooltip.Provider delayDuration={50}>
            <Component {...pageProps} />
        </RTooltip.Provider>
    );
}

export default MyApp;
