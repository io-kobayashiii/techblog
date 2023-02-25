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
      <main className="pt-70 md:pt-180 pb-50 md:pb-80 bg-gray-800">
        <div className="px-15 md:px-30 max-w-lg mx-auto">{children}</div>
      </main>
      <Footer categories={categories} />
    </>
  );
};

export default DefaultLayout;
