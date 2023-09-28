'use client';

import { useEffect, useRef, useState } from 'react';
import { ArticleCardInLoading } from '../Card/ArticleCardInLoading';
import { ArticleCard } from '../Card/ArticleCard';
import { ArticleType } from '@/types/ArticleTypes';

type Props = {
  articles: ArticleType[];
};

export default function PseudoAdditionalFetchedArticles({ articles }: Props) {
  const [renderingArticles, setRenderingArticles] = useState<ArticleType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const observedElementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      async ([{ isIntersecting }]) => {
        setIsLoading(isIntersecting);
        if (isIntersecting) {
          setTimeout(() => {
            setRenderingArticles((state) => [
              ...state,
              ...articles.slice(state.length, state.length + 10),
            ]);
            setIsLoading(false);
          }, 1000);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    const { current } = observedElementRef;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  if (!articles.length) return null;
  return (
    <>
      {renderingArticles.map(({ id, title, publishedAt, categories }) => (
        <li key={id} className={'mt-15 md:mt-30 md:w-[calc(50%-15px)]'}>
          <ArticleCard
            data={{
              title,
              date: publishedAt,
              href: `/articles/${id}`,
              categoryNames: categories.map(({ name }) => name),
            }}
          />
        </li>
      ))}

      <li ref={observedElementRef} className="w-100p" />

      {isLoading && articles.length !== renderingArticles.length && (
        <>
          <li className="mt-15 md:mt-30 md:w-[calc(50%-15px)]">
            <ArticleCardInLoading />
          </li>
          <li className="mt-15 md:mt-30 md:w-[calc(50%-15px)]">
            <ArticleCardInLoading />
          </li>
        </>
      )}
    </>
  );
}
