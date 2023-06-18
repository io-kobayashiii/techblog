import '@/styles/globals.css';
import { Metadata } from 'next';
import { M_PLUS_1p } from 'next/font/google';
import ContextProviders from '@/contexts/ContextProviders';
import ApiClient from '@/utils/ApiClient';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const mPlus1pFont = M_PLUS_1p({
  subsets: ['latin-ext'],
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: 'For',
  description:
    'Webアプリケーション開発における備忘録や実装メモなどを発信しています。',
};

type Props = {
  children: React.ReactNode;
};

export default async function RootLayout({ children }: Props) {
  const { contents } = await ApiClient.categories();
  return (
    <html lang="jp">
      <head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/@coreui/icons/css/all.min.css"
        />
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
      <body className={mPlus1pFont.className}>
        <ContextProviders>
          <Header categories={contents} />
          {children}
          <Footer categories={contents} />
        </ContextProviders>
      </body>
    </html>
  );
}
