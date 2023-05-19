import ApiClient from '@/utils/ApiClient';
import * as ArticleTypes from '@/types/ArticleTypes';
import { ArticleCard } from '@/components/Card/ArticleCard';
import { LayoutType } from '@/types/LayoutTypes';

type Props = {
  articles: ArticleTypes.ArticleType[];
};

const Index = ({ articles }: Props) => {
  return (
    <>
      <ul className="md:flex md:flex-wrap md:justify-between">
        {articles.map((article, index) => (
          <li
            key={article.id}
            className={
              index == 0 ? 'md:w-100p' : 'mt-15 md:mt-30 md:w-[calc(50%-15px)]'
            }
          >
            <ArticleCard
              unevenness="bumps"
              shadowColor="default"
              data={{
                title: article.title,
                date: article.publishedAt,
                href: `/articles/${article.id}`,
                categories: article.categories.map((category) => category.name),
              }}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Index;

type PageProps = () => Promise<{
  props: {
    layout: LayoutType;
    articles: ArticleTypes.ArticleType[];
    categories: ArticleTypes.CategoryType[];
  };
}>;

export const getStaticProps: PageProps = async () => {
  const articles = await ApiClient.articles();
  const categories = await ApiClient.categories();
  return {
    props: {
      layout: 'default',
      articles: articles.contents,
      categories: categories.contents,
    },
  };
};
