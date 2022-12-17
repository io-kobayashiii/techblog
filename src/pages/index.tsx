import ApiClient from '@/utils/ApiClient';
import * as GlobalTypes from '@/types/GlobalTypes';
import ArticleCard from '@/components/card/ArticleCard';

type Props = {
  articles: GlobalTypes.ArticleType[];
};

const Index = ({ articles }: Props) => {
  return (
    <>
      <ul className="md:flex md:flex-wrap md:justify-between">
        {articles.map((article, index) => (
          <li
            key={article.id}
            className={
              index == 0 ? 'md:w-100p' : 'md:w-[calc(50%-15px)] mt-15 md:mt-30'
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
              className={[
                'default',
                'bg-white',
                'md:h-100p',
                'md:flex',
                'md:flex-col',
                'md:justify-between',
              ]}
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
    layout: GlobalTypes.LayoutType;
    articles: GlobalTypes.ArticlesType;
    categories: GlobalTypes.CategoriesType;
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
