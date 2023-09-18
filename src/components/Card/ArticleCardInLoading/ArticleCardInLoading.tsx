'use client';

import * as React from 'react';
import { Skeleton } from '@mui/material';

export const ArticleCardInLoading = () => {
  return (
    <div
      className={
        'block rounded-12 p-15 shadow-bump md:flex md:h-100p md:flex-col md:justify-between md:p-30'
      }
    >
      <div>
        <Skeleton
          variant="rounded"
          animation="wave"
          width={'full'}
          height={20}
        />
        <Skeleton
          variant="rounded"
          animation="wave"
          width={'full'}
          height={100}
          className="mt-15"
        />
      </div>
      <div className="mt-10 flex w-100p justify-end">
        <Skeleton animation="wave" width={100} />
      </div>
    </div>
  );
};
