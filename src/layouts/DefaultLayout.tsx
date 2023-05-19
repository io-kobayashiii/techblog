import * as React from 'react';
import Head from 'next/head';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SiteConfig } from '@/configs/SiteConfig';
import { useGlobalNavigation } from '@/hooks/useGlobalNavigation';
import * as ArticleTypes from '@/types/ArticleTypes';

type Props = {
  categories: ArticleTypes.CategoryType[];
  children: React.ReactNode;
};

const DefaultLayout = ({ categories, children }: Props) => {
  useGlobalNavigation();
  return (
    <>
      <Head>
        <title>{SiteConfig.title}</title>
        <meta property="description" content={SiteConfig.description} />
      </Head>
      <Header categories={categories} />
      <main className="bg-gray-800 pt-76 pb-20 md:pt-180 md:pb-80">
        <div className="mx-auto max-w-lg px-15 md:px-30">{children}</div>
      </main>
      <Footer categories={categories} />
    </>
  );
};

export default DefaultLayout;
