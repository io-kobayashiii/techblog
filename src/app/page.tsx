import { ArticleCard } from '@/components/Card/ArticleCard';
import PseudoAdditionalFetchedArticles from '@/components/PseudoAdditionalFetchedArticles/PseudoAdditionalFetchedArticles';
import { getAllArticles } from '@/utils/microCmsClient';
import { notFound } from 'next/navigation';

export default async function Page() {
  const articles = await getAllArticles();
  if (!articles) notFound();
  return (
    <>
      <main className="bg-gray-800 pt-76 pb-20 md:pt-180 md:pb-80">
        <div className="mx-auto max-w-lg px-15 md:px-30">
          <ul className="flex flex-wrap justify-between gap-[15px] md:gap-[30px]">
            {articles
              .slice(0, 10)
              .map(({ id, title, publishedAt, categories }) => (
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
            <PseudoAdditionalFetchedArticles articles={articles.slice(10)} />
          </ul>
        </div>
      </main>
    </>
  );
}
