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
        <li
          key={id}
          className={
            'basis-full md:shrink-0 md:grow-0 md:basis-[calc(100%/2-30px/2)]'
          }
        >
          <ArticleCard
            unevenness="bumps"
            shadowColor="default"
            data={{
              title,
              date: publishedAt,
              href: `/articles/${id}`,
              categories: categories.map(({ name }) => name),
            }}
          />
        </li>
      ))}

      <li ref={observedElementRef} className="w-100p" />

      {isLoading && articles.length !== renderingArticles.length && (
        <>
          <li className="basis-full md:shrink-0 md:grow-0 md:basis-[calc(100%/2-30px/2)]">
            <ArticleCardInLoading />
          </li>
          <li className="basis-full md:shrink-0 md:grow-0 md:basis-[calc(100%/2-30px/2)]">
            <ArticleCardInLoading />
          </li>
        </>
      )}
    </>
  );
}
