import styles from './ArticleBody.module.scss';

type Props = {
  articleBody: string;
};

export const ArticleBody = ({ articleBody }: Props) => {
  return (
    <div
      className={`${styles.articles} mt-40 sm:mt-60 md:mt-80 border-t-2 border-gray-200 text-16`}
      dangerouslySetInnerHTML={{ __html: articleBody }}
    />
  );
};
