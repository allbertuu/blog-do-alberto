import { FilterProvider } from '@contexts/FilterContext';
import * as RTooltip from '@radix-ui/react-tooltip';
import '@styles/globals.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <FilterProvider>
            <RTooltip.Provider delayDuration={25}>
                <Component {...pageProps} />
            </RTooltip.Provider>
        </FilterProvider>
    );
}

export default MyApp;
