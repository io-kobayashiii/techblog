import { ArticleCard } from '@/components/Card/ArticleCard';
import * as ArticleTypes from '@/types/ArticleTypes';
import { getAllArticles, getCategories } from '@/utils/microCmsClient';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const categories = await getCategories();
  if (!categories) notFound();
  return categories.map(({ slug }) => ({ slug }));
}

type Props = {
  params: {
    slug: string;
  };
};

export default async function Page({ params: { slug } }: Props) {
  const articles = await getAllArticles();
  if (!articles) notFound();
  const matchedArticles: ArticleTypes.ArticleType[] | undefined =
    articles.reduce(
      (
        array: ArticleTypes.ArticleType[],
        article: ArticleTypes.ArticleType
      ): ArticleTypes.ArticleType[] =>
        article.categories.reduce(
          (bool: boolean, category: ArticleTypes.CategoryType): boolean =>
            category.slug === slug ? true : bool,
          false
        )
          ? array.concat([article])
          : array,
      []
    );

  const categories = await getCategories();
  if (!categories) notFound();
  const category = categories.find((category) => category.slug === slug)?.name;

  return (
    <>
      <main className="bg-gray-800 pt-76 pb-20 md:pt-180 md:pb-80">
        <div className="mx-auto max-w-lg px-15 md:px-30">
          {matchedArticles ? (
            <>
              <h1 className={`text-24 font-bold sm:text-28 md:text-32`}>
                Category: {category ?? ''}
              </h1>
              <ul className="mt-30 md:mt-50 md:flex md:flex-wrap md:justify-between">
                {matchedArticles.map((article, index) => (
                  <li
                    key={article.id}
                    className={
                      index == 0
                        ? 'md:w-100p'
                        : 'mt-15 md:mt-30 md:w-[calc(50%-15px)]'
                    }
                  >
                    <ArticleCard
                      data={{
                        title: article.title,
                        date: article.publishedAt,
                        href: `/articles/${article.id}`,
                        categories: article.categories.map(({ name }) => name),
                      }}
                    />
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <h1 className={`text-24 font-bold sm:text-28 md:text-32`}>
              This category is not exist.
            </h1>
          )}
        </div>
      </main>
    </>
  );
}
