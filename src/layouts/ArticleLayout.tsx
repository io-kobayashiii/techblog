import * as React from 'react';
import Head from 'next/head';
import Header from '@/components/organisms/header/Header';
import Footer from '@/components/organisms/footer/Footer';
import { SiteConfig } from '@/config/SiteConfig';
import { GlobalNavigationStateContext } from '@/contexts/GlobalNavigationStateContext';

const ArticleLayout = ({ children, article, categories }) => {
  const [isInitialRendering, setIsInitialRendering] = React.useState(true);
  const { isGlobalNavigationOpen } = React.useContext(
    GlobalNavigationStateContext
  );
  const [bodyElement, setBodyElement] = React.useState<HTMLBodyElement>();
  React.useEffect(() => {
    setBodyElement(document.getElementsByTagName('body')[0]);
  }, []);
  React.useEffect(() => {
    console.log(
      `App.useEffect() / isGlobalNavigationOpen: ${isGlobalNavigationOpen}`
    );
    if (isInitialRendering) {
      setIsInitialRendering(false);
      return;
    }
    bodyElement.classList.toggle('overflow-hidden');
  }, [isGlobalNavigationOpen]);
  return (
    <>
      <Head>
        <title>
          {article.title} | {SiteConfig.title}
        </title>
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
