import { NeumorphismButton } from '@/components/NeumorphismButton';
import 'highlight.js/styles/stackoverflow-dark.css';
import ApiRequests from '@/utils/ApiClient';
import * as ArticleTypes from '@/types/ArticleTypes';
import { GetStaticProps } from 'next';
import { useApplyHighlightJs } from '@/hooks/useApplyHighlightJs';
import { LayoutType } from '@/types/LayoutTypes';
import { ArticleBody } from '@/components/ArticleBody';

type Props = {
  article: ArticleTypes.ArticleType;
};

const Article = ({ article }: Props) => {
  useApplyHighlightJs();
  return (
    <>
      <p className="text-14 md:text-18">
        {new Date(article.publishedAt)
          .toLocaleDateString('ja-JP', {
            timeZone: 'Asia/Tokyo',
          })
          .replaceAll('/', '.')}
      </p>
      <h1 className={`mt-16 text-20 font-bold sm:text-24 md:mt-22 md:text-28`}>
        {article.title}
      </h1>
      <div className="m-minus-5 mt-15 flex flex-wrap md:mt-25">
        {article.categories.map((category, index) => {
          return (
            <NeumorphismButton
              key={index}
              unevenness={'dents'}
              shadowColor={'default'}
              displayText={category.name}
              className={
                'pointer-events-none m-5 rounded-100vh py-5 px-15 text-12 md:py-8 md:px-12 md:text-14'
              }
            />
          );
        })}
      </div>
      <ArticleBody articleBody={article.body ?? ''} />
    </>
  );
};

export default Article;

export const getStaticPaths = async () => {
  const articles = await ApiRequests.articles();
  const paths = articles.contents?.map((content) => `/articles/${content.id}`);
  return { paths, fallback: false };
};

type PageProps = {
  layout: LayoutType;
  article: ArticleTypes.ArticleType;
  categories: ArticleTypes.CategoryType[];
};

type GetStaticPropsParams = {
  id: string;
};

export const getStaticProps: GetStaticProps<
  PageProps,
  GetStaticPropsParams
> = async ({ params }) => {
  const article = await ApiRequests.article(params?.id ?? '');
  const categories = await ApiRequests.categories();
  return {
    props: {
      layout: 'article',
      article: article,
      categories: categories.contents,
    },
  };
};
