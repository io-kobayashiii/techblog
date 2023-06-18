import * as React from 'react';
import styles from './ArticleCard.module.scss';
import Link from 'next/link';
import { ArticleCardTitle } from '@/components/Card/ArticleCardTitle/ArticleCardTitle';
import { NeumorphismButton } from '@/components/NeumorphismButton';

type Props = {
  unevenness: 'dents' | 'bumps';
  shadowColor: 'default' | 'primary';
  data: {
    title: string;
    date: string;
    href: string;
    categories?: string[];
  };
  className?: string;
};

export const ArticleCard = ({
  unevenness,
  shadowColor,
  data,
  className,
}: Props) => {
  return (
    <Link
      href={data.href}
      className={`block rounded-12 p-15 md:flex md:h-100p md:flex-col md:justify-between md:p-30 ${
        styles[`${unevenness}-${shadowColor}`]
      } ${className ?? ''}`}
    >
      <div>
        <ArticleCardTitle displayText={data.title} className={`mb-15`} />
        <div className="m-minus-5 flex flex-wrap">
          {data.categories &&
            data.categories.map((category, index) => {
              return (
                <NeumorphismButton
                  key={index}
                  unevenness="dents"
                  shadowColor="default"
                  displayText={category}
                  className={
                    'm-5 cursor-pointer rounded-100vh py-5 px-15 text-11 md:py-8 md:px-12 md:text-12'
                  }
                />
              );
            })}
        </div>
      </div>
      <p className="mt-15 text-right text-12 md:text-14">
        {new Date(data.date)
          .toLocaleDateString('ja-JP', {
            timeZone: 'Asia/Tokyo',
          })
          .replaceAll('/', '.')}
      </p>
    </Link>
  );
};
