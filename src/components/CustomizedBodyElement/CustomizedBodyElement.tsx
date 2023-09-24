'use client';

import { useGlobalNavigationVisibilityControl } from '@/hooks/useGlobalNavigationVisibilityControl';
import { useGlobalNavigationState } from '@/recoil/globalNavigation';
import { classNames } from '@/utils/classNames';
import { M_PLUS_1p } from 'next/font/google';

const mPlus1pFont = M_PLUS_1p({
  subsets: ['latin-ext'],
  weight: ['400', '700'],
});

type Props = {
  children: React.ReactNode;
};

export const CustomizedBodyElement = ({ children }: Props) => {
  useGlobalNavigationVisibilityControl();
  const isOpen = useGlobalNavigationState();
  return (
    <body
      className={classNames(
        mPlus1pFont.className,
        isOpen && 'overflow-hidden',
        'flex min-h-100vh flex-col'
      )}
    >
      {children}
    </body>
  );
};
