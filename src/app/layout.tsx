import '@/styles/globals.css';
import { Metadata } from 'next';
import ContextProviders from '@/contexts/ContextProviders';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { notFound } from 'next/navigation';
import { M_PLUS_1p } from 'next/font/google';
import { getCategories } from '@/utils/microCmsClient';

const mPlus1pFont = M_PLUS_1p({
  subsets: ['latin-ext'],
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: {
    default: 'For',
    template: '%s | For',
  },
  description:
    'Webアプリケーション開発における備忘録や実装メモなどを発信しています。',
};

type Props = {
  children: React.ReactNode;
};

export default async function RootLayout({ children }: Props) {
  const categories = await getCategories();
  if (!categories) notFound();
  return (
    <html lang="ja">
      <head>
        {/* Google Fontsのfetchがエラーになる場合はアンコメントする */}
        {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" /> */}
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        {/* <link
          href="https://fonts.googleapis.com/css2?family=Gemunu+Libre:wght@200&family=M+PLUS+1p:wght@400;700&display=swap"
          rel="stylesheet"
        /> */}
        <link rel="shortcut icon" href="/favicon.ico" />
        <script
          defer
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`}
        />
        <script
          id={'ga'}
          defer
          dangerouslySetInnerHTML={{
            __html: `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}');`,
          }}
        />
      </head>
      <body id={'body'} className={mPlus1pFont.className}>
        <ContextProviders>
          <Header categories={categories} />
          {children}
          <Footer categories={categories} />
        </ContextProviders>
      </body>
    </html>
  );
}
