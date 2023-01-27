import * as React from 'react';
import Head from 'next/head';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import { SiteConfig } from '@/configs/SiteConfig';
import { useGlobalNavigation } from '@/hooks/useGlobalNavigation';
import * as ArticleTypes from '@/types/ArticleTypes';

type Props = {
  article: ArticleTypes.ArticleType;
  categories: ArticleTypes.CategoryType[];
  children: React.ReactNode;
};

const ArticleLayout = ({ article, categories, children }: Props) => {
  useGlobalNavigation();
  return (
    <>
      <Head>
        <title>{`${article.title} | ${SiteConfig.title}`}</title>
        <meta property="description" content={article.description} />
      </Head>
      <Header categories={categories} />
      <main className="pt-70 md:pt-180 pb-50 md:pb-80 bg-gray-100">
        <article className="px-15 md:px-30 max-w-lg mx-auto">
          {children}
        </article>
      </main>
      <Footer categories={categories} />
    </>
  );
};

export default ArticleLayout;
