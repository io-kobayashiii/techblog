import { ArticleCard } from '@/components/Card/ArticleCard';
import ApiClient from '@/utils/ApiClient';

export default async function Page() {
  const { contents } = await ApiClient.articles();
  return (
    <>
      <main className="bg-gray-800 pt-76 pb-20 md:pt-180 md:pb-80">
        <div className="mx-auto max-w-lg px-15 md:px-30">
          <ul className="md:flex md:flex-wrap md:justify-between">
            {contents?.map((article, index) => (
              <li
                key={article.id}
                className={
                  index == 0
                    ? 'md:w-100p'
                    : 'mt-15 md:mt-30 md:w-[calc(50%-15px)]'
                }
              >
                <ArticleCard
                  unevenness="bumps"
                  shadowColor="default"
                  data={{
                    title: article.title,
                    date: article.publishedAt,
                    href: `/articles/${article.id}`,
                    categories: article.categories.map(
                      (category) => category.name
                    ),
                  }}
                />
              </li>
            ))}
          </ul>
        </div>
      </main>
    </>
  );
}
