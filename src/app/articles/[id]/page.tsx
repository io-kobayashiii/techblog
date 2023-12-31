import { NeumorphismButton } from '@/components/NeumorphismButton';
import { ArticleBody } from '@/components/ArticleBody';
import { notFound } from 'next/navigation';
import { ApplyHooks } from '@/components/ApplyHooks/ApplyHooks';
import 'highlight.js/styles/base16/atelier-forest.css';
import { Metadata } from 'next';
import { getAllArticles, getArticle } from '@/utils/microCmsClient';

export async function generateStaticParams() {
  const articles = await getAllArticles();
  if (!articles) return [];
  return articles.map(({ id }) => ({ id })) ?? [];
}

type Props = {
  params: {
    id: string;
  };
};

export async function generateMetadata({
  params: { id },
}: Props): Promise<Metadata> {
  const article = await getArticle(id);

  return {
    title: article?.title ?? 'For',
    description: article?.description,
    openGraph: {
      title: article?.title ?? 'For',
      description: article?.description,
      url: `https://for.kobayashiii.dev/articles/${article?.id ?? ''}`,
      siteName: article?.title ?? 'For',
      locale: 'ja_JP',
      type: 'website',
      images: 'https://for.kobayashiii.dev/for-icon-512.png',
    },
    twitter: {
      title: article?.title ?? 'For',
      description: article?.description,
      card: 'summary',
      site: '@iooo231',
      creator: '@iooo231',
      images: 'https://for.kobayashiii.dev/for-icon-512.png',
    },
  };
}

export default async function Page({ params: { id } }: Props) {
  const article = await getArticle(id);
  if (!article) notFound();
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
              unevenness={'dent'}
              displayText={category.name}
              className={
                'pointer-events-none m-5 rounded-100vh py-5 px-15 text-12 md:py-8 md:px-12 md:text-14'
              }
            />
          );
        })}
      </div>
      <ArticleBody articleBody={article.body ?? ''} />
      <ApplyHooks />
    </>
  );
}
