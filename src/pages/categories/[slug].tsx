import * as ArticleTypes from '@/types/ArticleTypes';
import { ArticleCard } from '@/components/Card/ArticleCard';
import 'highlight.js/styles/stackoverflow-dark.css';
import ApiRequests from '@/utils/ApiClient';
import { GetStaticProps } from 'next';
import { LayoutType } from '@/types/LayoutTypes';

type Props = {
  articles: ArticleTypes.ArticleType[];
  slug: string | null;
};

const CategoriesIndex = ({ articles, slug }: Props) => {
  return (
    <>
      <h1 className={`text-24 font-bold sm:text-28 md:text-32`}>
        {slug ? <>Category: {slug}</> : <>Selected category is not exist.</>}
      </h1>
      <ul className="mt-30 md:mt-50 md:flex md:flex-wrap md:justify-between">
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
  slug: string | null;
};

type GetStaticPropsParams = {
  slug: string;
};

export const getStaticProps: GetStaticProps<
  PageProps,
  GetStaticPropsParams
> = async ({ params }) => {
  const articles = await ApiRequests.articles();
  const categories = await ApiRequests.categories();
  const paramsSlug = params?.slug ?? '';

  if (!paramsSlug || articles.totalCount == 0) {
    return {
      props: {
        layout: 'default',
        articles: [],
        categories: categories.contents,
        slug: null,
      },
    };
  }

  const matchedArticles = articles.contents!.filter((article) => {
    const slugs = Array.from(
      new Set(article.categories.map((articleCategory) => articleCategory.slug))
    );
    return slugs.includes(paramsSlug);
  });

  return {
    props: {
      layout: 'default',
      articles: matchedArticles,
      categories: categories.contents,
      slug: categories.contents
        .map((category) => category.slug === paramsSlug && category.name)
        .filter((v) => v)
        .join(''),
    },
  };
};
