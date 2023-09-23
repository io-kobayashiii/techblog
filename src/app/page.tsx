import { ArticleCard } from '@/components/Card/ArticleCard';
import PseudoAdditionalFetchedArticles from '@/components/PseudoAdditionalFetchedArticles/PseudoAdditionalFetchedArticles';
import { getAllArticles } from '@/utils/microCmsClient';
import { notFound } from 'next/navigation';

export default async function Page() {
  const articles = await getAllArticles();
  if (!articles) notFound();
  return (
    <>
      <main className="grow bg-gray-800 pt-56 pb-20 md:pt-180 md:pb-80">
        <div className="mx-auto max-w-lg px-15 md:px-30">
          <ul className="md:flex md:flex-wrap md:justify-between">
            {articles
              .slice(0, 10)
              .map(({ id, title, publishedAt, categories }) => (
                <li key={id} className={'mt-15 md:mt-30 md:w-[calc(50%-15px)]'}>
                  <ArticleCard
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
