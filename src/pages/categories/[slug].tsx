import * as ArticleTypes from '@/types/ArticleTypes';
import ArticleCard from '@/components/card/ArticleCard';
import styles from '@/styles/pages/categories/categories.module.scss';
import 'highlight.js/styles/stackoverflow-dark.css';
import ApiRequests from '@/utils/ApiClient';
import { GetStaticProps } from 'next';
import { LayoutType } from '@/types/LayoutTypes';

type Props = {
  articles: ArticleTypes.ArticleType[];
  slugs: string[];
};

const CategoriesIndex = ({ articles, slugs }: Props) => {
  return (
    <>
      <h1 className={`${styles.heading} text-24 sm:text-28 md:text-32`}>
        Category: {slugs}
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

export default CategoriesIndex;

export const getStaticPaths = async () => {
  const categories = await ApiRequests.categories();
  const paths = categories.contents.map(
    (content) => `/categories/${content.slug}`
  );
  return { paths, fallback: false };
};

type PageProps = {
  layout: LayoutType;
  articles: ArticleTypes.ArticleType[];
  categories: ArticleTypes.CategoryType[];
  slugs: string[];
};

type GetStaticPropsParams = {
  slug: string;
};

export const getStaticProps: GetStaticProps<PageProps, GetStaticPropsParams> =
  async ({ params }) => {
    const articles = await ApiRequests.articles();
    const matchedArticles: ArticleTypes.ArticleType[] =
      articles.contents.reduce(
        (
          array: ArticleTypes.ArticleType[],
          article: ArticleTypes.ArticleType
        ): ArticleTypes.ArticleType[] =>
          article.categories.reduce(
            (bool: boolean, category: ArticleTypes.CategoryType): boolean =>
              category.slug === params.slug ? true : bool,
            false
          )
            ? array.concat([article])
            : array,
        []
      );
    const categories = await ApiRequests.categories();
    return {
      props: {
        layout: 'default',
        articles: matchedArticles,
        categories: categories.contents,
        slugs: categories.contents.map(
          (category) => category.slug === params.slug && category.name
        ),
      },
    };
  };
