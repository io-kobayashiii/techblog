import * as React from 'react';
import styles from './ArticleCard.module.scss';
import Link from 'next/link';
import { ArticleCardTitle } from '@/components/Card/ArticleCardTitle/ArticleCardTitle';
import { NeumorphismButton } from '@/components/NeumorphismButton';
import Moment from 'react-moment';

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
      className={`block md:h-100p p-15 md:p-30 md:flex md:flex-col md:justify-between rounded-12 ${
        styles[`${unevenness}-${shadowColor}`]
      } ${className ?? ''}`}
    >
      <div>
        <ArticleCardTitle displayText={data.title} className={`mb-15`} />
        <div className="flex flex-wrap m-minus-5">
          {!!data.categories &&
            data.categories.map((category, index) => {
              return (
                <NeumorphismButton
                  key={index}
                  unevenness="dents"
                  shadowColor="default"
                  displayText={category}
                  className={
                    'm-5 rounded-100vh py-5 px-15 md:py-8 md:px-12 text-11 md:text-12'
                  }
                />
              );
            })}
        </div>
      </div>
      <p className="text-12 md:text-14 text-right mt-15">
        <Moment format={'YYYY.MM.DD'}>{data.date}</Moment>
      </p>
    </Link>
  );
};
