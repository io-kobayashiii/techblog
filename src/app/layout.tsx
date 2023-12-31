import '@/styles/globals.css';
import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { notFound } from 'next/navigation';
import { getCategories } from '@/utils/microCmsClient';
import { RecoilRootProvider } from '@/components/Provider/RecoilRootProvider';
import { CustomizedBodyElement } from '@/components/CustomizedBodyElement';

const siteConfig = {
  title: 'For',
  description:
    'Webアプリケーション開発における備忘録や実装メモなどを発信しています。',
  url: 'https://for.kobayashiii.dev/',
};

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.title,
    locale: 'ja_JP',
    type: 'website',
    images: 'https://for.kobayashiii.dev/for-icon-512.png',
  },
  twitter: {
    card: 'summary',
    title: siteConfig.title,
    description: siteConfig.description,
    site: '@iooo231',
    creator: '@iooo231',
    images: 'https://for.kobayashiii.dev/for-icon-512.png',
  },
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
      <RecoilRootProvider>
        <CustomizedBodyElement>
          <Header categories={categories} />
          <div className="flex grow flex-col">{children}</div>
          <Footer categories={categories} />
        </CustomizedBodyElement>
      </RecoilRootProvider>
    </html>
  );
}
