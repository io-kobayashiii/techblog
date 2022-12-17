import '@/styles/globals.css';
import DefaultLayout from '@/layouts/DefaultLayout';
import ArticleLayout from '@/layouts/ArticleLayout';
import * as React from 'react';
import ContextProviders from '@/contexts/ContextProviders';

const App = ({ Component, pageProps }) => {
  pageProps['tailwindClasses'] =
    'pt-70 md:pt-180 pb-50 md:pb-80 bg-gray-100 px-15 md:px-30 max-w-lg mx-auto';
  switch (pageProps.layout) {
    case 'default':
      return (
        <ContextProviders>
          <DefaultLayout categories={pageProps.categories}>
            <Component {...pageProps} />
          </DefaultLayout>
        </ContextProviders>
      );
    case 'article':
      return (
        <ContextProviders>
          <ArticleLayout
            article={pageProps.article}
            categories={pageProps.categories}
          >
            <Component {...pageProps} />
          </ArticleLayout>
        </ContextProviders>
      );
    case '404':
    case '500':
      return (
        <ContextProviders>
          <DefaultLayout categories={pageProps.categories}>
            <Component {...pageProps} />
          </DefaultLayout>
        </ContextProviders>
      );
  }
};

export default App;
