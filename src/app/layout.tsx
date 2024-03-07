import { PostsProvider } from '@/contexts/PostsContext';
import { ToastProvider } from '@/contexts/ToastProvider.context';
import '@/styles/globals.css';
import '@/styles/hljs.css';
import { Metadata } from 'next';
import {
  Nunito_Sans as NunitoSans,
  Titillium_Web as TitilliumWeb,
} from 'next/font/google';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';

export const metadata: Metadata = {
  title: {
    template: '%s | Blog do Alberto',
    default: 'Blog do Alberto | Onde você experimenta minha mente',
  },
  description:
    'Aqui você encontra discussões, dicas e sugestões de (quase) tudo mas especialmente tecnologia, sob o meu olhar 👨🏽‍💻',
  generator: 'Next.js',
  applicationName: 'Blog do Alberto',
  keywords:
    'blog, frontend, desenvolvedor, developer, programador, alberto santos, react, javascript, web development, desenvolvimento web',
  authors: [{ name: 'Alberto', url: 'https://www.albertosantos.dev' }],
  creator: 'Alberto',
  publisher: 'Vercel',
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
    },
  },
  category: 'technology',
};

const nunitoSans = NunitoSans({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
});

const titillium = TitilliumWeb({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-titillium',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body
        className={`${titillium.variable} ${nunitoSans.className} bg-blue-700`}
      >
        <ToastProvider />
        <SpeedInsights />
        <Analytics />
        <PostsProvider>{children}</PostsProvider>
      </body>
    </html>
  );
}
