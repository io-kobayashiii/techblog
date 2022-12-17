import { ArticleType, ArticlesType, CategoryType } from '@/types/GlobalTypes';
import ArticleCard from '@/components/card/ArticleCard';
import styles from '@/styles/pages/categories/categories.module.scss';
import 'highlight.js/styles/stackoverflow-dark.css';
import ApiRequests from '@/utils/ApiClient';

export default function CategoriesIndex({ articles, slug }) {
  return (
    <>
      <h1 className={`${styles.heading} text-24 sm:text-28 md:text-32`}>
        Category: {slug}
      </h1>
      <ul className="mt-30 md:mt-50 md:flex md:flex-wrap md:justify-between">
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
              className={['default', 'bg-white']}
            />
          </li>
        ))}
      </ul>
    </>
  );
}

export const getStaticPaths = async () => {
  const categories = await ApiRequests.categories();
  const paths = categories.contents.map(
    (content) => `/categories/${content.slug}`
  );
  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const articles = await ApiRequests.articles();
  // prettier-ignore
  const matchedArticles: ArticlesType = articles.contents.reduce((array: ArticlesType, article: ArticleType): ArticlesType =>
			article.categories.reduce((bool: boolean, category: CategoryType): boolean =>
				category.slug === context.params.slug ? true : bool
			, false) ? array.concat([article]) : array
		, [])
  const categories = await ApiRequests.categories();
  return {
    props: {
      layout: 'default',
      articles: matchedArticles,
      categories: categories.contents,
      slug: categories.contents.map(
        (category) => category.slug === context.params.slug && category.name
      ),
    },
  };
};
