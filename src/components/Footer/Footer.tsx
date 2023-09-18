import * as React from 'react';
import Link from 'next/link';
import styles from './Footer.module.scss';
import { NeumorphismButton } from '@/components/NeumorphismButton';
import * as ArticleTypes from '@/types/ArticleTypes';
import { classNames } from '@/utils/classNames';

type Props = {
  categories: ArticleTypes.CategoryType[];
};

export const Footer = ({ categories }: Props) => {
  return (
    <>
      <footer className={classNames('bg-gray-800 py-30 md:py-50', styles.root)}>
        <div className="mx-auto max-w-lg px-15 md:px-30">
          <div className="hidden md:block">
            <div className="rounded-12 p-15 shadow-dent md:p-30">
              <p className="text-bold text-16">Categories</p>
              <div className="mt-20 h-2 shadow-border" />
              <ul className="m-minus-5 flex flex-wrap pt-20">
                {categories.map((category, index) => {
                  return (
                    <Link key={index} href={`/categories/${category.slug}`}>
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
          <div className="mt-30 hidden md:block">
            <div className="rounded-12 p-15 shadow-dent md:p-30">
              <p className="text-bold text-16">Profile</p>
              <div className="mt-20 h-2 shadow-border" />
              <div className="mt-20">
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
                    displayText={`<i class='cib-twitter'></i>`}
                    className={'ml-10 rounded-100vh p-10 text-24 leading-0'}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center text-12 md:mt-50">
          &copy; 2021 - {new Date().getFullYear()} io-kobayashiii All Rights
          Reserved.
        </div>
      </footer>
    </>
  );
};
