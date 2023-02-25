import * as React from 'react';

type Props = {
  displayText: string;
  className?: string;
};

export const ArticleCardTitle = ({ displayText, className }: Props) => {
  return (
    <h3
      className={`${className ?? ''} font-bold text-16 sm:text-18 lg:text-20`}
    >
      {displayText}
    </h3>
  );
};
