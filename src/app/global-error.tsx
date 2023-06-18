'use client';

import '@/styles/globals.css';
import { M_PLUS_1p } from 'next/font/google';
import ContextProviders from '@/contexts/ContextProviders';
import ApiClient from '@/utils/ApiClient';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const mPlus1pFont = M_PLUS_1p({
  subsets: ['latin-ext'],
  weight: ['400', '700'],
});

export default async function GlobalError() {
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
          <h1>Internal server error.</h1>
          <Footer categories={contents} />
        </ContextProviders>
      </body>
    </html>
  );
}
