'use client';

import '@/styles/globals.css';
import ContextProviders from '@/contexts/ContextProviders';
import ApiClient from '@/utils/ApiClient';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { notFound } from 'next/navigation';
import { M_PLUS_1p } from 'next/font/google';

const mPlus1pFont = M_PLUS_1p({
  subsets: ['latin-ext'],
  weight: ['400', '700'],
});

export default async function GlobalError() {
  const categories = await ApiClient.categories();
  if (!categories) notFound();

  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          rel="stylesheet"
          href="https://unpkg.com/@coreui/icons/css/all.min.css"
        />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Gemunu+Libre:wght@200&family=M+PLUS+1p:wght@400&display=swap"
          rel="stylesheet"
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
      <body id={'body'} className={mPlus1pFont.className}>
        <ContextProviders>
          <Header categories={categories.contents} />
          <h1>Internal server error.</h1>
          <Footer categories={categories.contents} />
        </ContextProviders>
      </body>
    </html>
  );
}
