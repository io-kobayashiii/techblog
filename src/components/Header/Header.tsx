'use client';

import * as React from 'react';
import Link from 'next/link';
import styles from './Header.module.scss';
import { NeumorphismButton } from '@/components/NeumorphismButton';
import * as ArticleTypes from '@/types/ArticleTypes';
import { Gemunu_Libre } from 'next/font/google';
import { useGlobalNavigation } from '@/hooks/useGlobalNavigation';
import { classNames } from '@/utils/classNames';

const gemunuLibreFont = Gemunu_Libre({
  subsets: ['latin'],
  weight: '200',
  display: 'swap',
});

type Props = {
  categories: ArticleTypes.CategoryType[];
};

export const Header = ({ categories }: Props) => {
  const { isGlobalNavigationOpen, setIsGlobalNavigationOpen } =
    useGlobalNavigation();

  return (
    <>
      <header
        className={classNames(
          'fixed top-0 left-0 z-10 w-100p overflow-hidden bg-gray-800 shadow-[0_5px_10px_0_rgba(0,0,0,0.5)] transition-[height] duration-300 ease-in-out md:flex md:items-center',
          isGlobalNavigationOpen ? 'h-100vh' : 'h-56 md:h-100'
        )}
      >
        <div className="mx-auto flex h-56 w-100p max-w-lg items-center justify-between px-15 md:px-30">
          <Link href="/" onClick={() => setIsGlobalNavigationOpen(false)}>
            <p className={`text-24 md:text-40 ${gemunuLibreFont.className}`}>
              For
            </p>
          </Link>
          <div
            onClick={() => setIsGlobalNavigationOpen(!isGlobalNavigationOpen)}
            className="md:hidden"
          >
            <NeumorphismButton
              unevenness={'bumps'}
              shadowColor={'default'}
              displayText={`<i class='cil-hamburger-menu'></i>`}
              className={'rounded-6 p-8 text-16 leading-0 md:p-16 md:text-24'}
            />
          </div>
          <div className="hidden md:block">
            <Link href="https://github.com/io-kobayashiii/techblog">
              <NeumorphismButton
                unevenness={'bumps'}
                shadowColor={'default'}
                displayText={`<i class="cib-github"></i>`}
                className={
                  'ml-15 rounded-100vh bg-gray-800 p-16 text-24 leading-0 text-white'
                }
              />
            </Link>
            <Link href="https://twitter.com/iooo231">
              <NeumorphismButton
                unevenness={'bumps'}
                shadowColor={'default'}
                displayText={`<i class="cib-twitter"></i>`}
                className={
                  'ml-15 rounded-100vh bg-gray-800 p-16 text-24 leading-0 text-white'
                }
              />
            </Link>
          </div>
        </div>
        <div className={`p-15 md:hidden`}>
          <div className="rounded-12 p-15 shadow-dent">
            <p className="text-bold text-16">Categories</p>
            <div className="mt-15 h-2 shadow-border" />
            <ul className="m-minus-5 flex flex-wrap pt-20">
              {categories.map((category, index) => {
                return (
                  <Link
                    key={index}
                    href={`/categories/${category.slug}`}
                    onClick={() => setIsGlobalNavigationOpen(false)}
                  >
                    <li>
                      <NeumorphismButton
                        unevenness={'bumps'}
                        shadowColor={'default'}
                        displayText={category.name}
                        className={'m-5 rounded-100vh p-16 text-14 leading-0'}
                      />
                    </li>
                  </Link>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="mt-30 p-15 md:hidden">
          <div className="rounded-12 p-15 shadow-dent">
            <p className="text-bold text-16">Profile</p>
            <div className="mt-15 h-2 shadow-border" />
            <div className="mt-15">
              <Link href="https://github.com/io-kobayashiii/techblog">
                <NeumorphismButton
                  unevenness={'bumps'}
                  shadowColor={'default'}
                  displayText={`<i class="cib-github"></i>`}
                  className={'rounded-100vh p-10 text-24 leading-0'}
                />
              </Link>
              <Link href="https://twitter.com/iooo231">
                <NeumorphismButton
                  unevenness={'bumps'}
                  shadowColor={'default'}
                  displayText={`<i class="cib-twitter"></i>`}
                  className={'ml-10 rounded-100vh p-10 text-24 leading-0'}
                />
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
