'use client';

import * as React from 'react';
import Link from 'next/link';
import * as ArticleTypes from '@/types/ArticleTypes';
import { Gemunu_Libre } from 'next/font/google';
import { classNames } from '@/utils/classNames';
import { IconButton } from '../IconButton';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import MenuIcon from '@mui/icons-material/Menu';
import { GlobalNavigation } from './GlobalNavigation';
import {
  useGlobalNavigationRecoilMutator,
  useGlobalNavigationState,
} from '@/recoil/globalNavigation';

const gemunuLibreFont = Gemunu_Libre({
  subsets: ['latin'],
  weight: '200',
  display: 'swap',
});

type Props = {
  categories: ArticleTypes.CategoryType[];
};

export const Header = ({ categories }: Props) => {
  const isOpen = useGlobalNavigationState();
  const { toggleGlobalNavigationState, closeGlobalNavigation } =
    useGlobalNavigationRecoilMutator();

  return (
    <>
      <header
        className={classNames(
          'fixed top-0 left-0 z-10 w-100p overflow-hidden bg-gray-800 shadow-[0_5px_10px_0_rgba(0,0,0,0.5)] transition-[height] duration-300 ease-in-out md:flex md:items-center',
          isOpen ? 'h-100vh' : 'h-56 md:h-100'
        )}
      >
        <div className="mx-auto flex h-56 w-100p max-w-lg items-center justify-between px-15 md:px-30">
          <Link href="/" onClick={() => closeGlobalNavigation()}>
            <p className={`text-24 md:text-40 ${gemunuLibreFont.className}`}>
              For
            </p>
          </Link>
          <div>
            <div
              onClick={() => toggleGlobalNavigationState()}
              className="md:hidden"
            >
              <IconButton Icon={MenuIcon} size={'large'} />
            </div>
            <div className="hidden md:flex md:flex-row-reverse">
              <Link
                href="https://github.com/io-kobayashiii/techblog"
                className="block"
              >
                <IconButton Icon={GitHubIcon} size={'large'} />
              </Link>
              <Link href="https://twitter.com/iooo231" className="mr-15 block">
                <IconButton Icon={TwitterIcon} size={'large'} />
              </Link>
            </div>
          </div>
        </div>
        <GlobalNavigation categories={categories} />
      </header>
    </>
  );
};
