import * as React from 'react';
import Link from 'next/link';
import styles from './Footer.module.scss';
import { NeumorphismButton } from '@/components/NeumorphismButton';
import * as ArticleTypes from '@/types/ArticleTypes';

type Props = {
  categories: ArticleTypes.CategoryType[];
};

export const Footer = ({ categories }: Props) => {
  return (
    <>
      <footer className={`${styles.bumps} py-30 md:py-50 bg-gray-800`}>
        <div className="max-w-lg mx-auto px-15 md:px-30">
          <div className="hidden md:block">
            <div className={`${styles.dents} p-15 md:p-30 rounded-12`}>
              <p className="text-16 text-bold">Categories</p>
              <div className={`h-2 mt-20 ${styles.border}`} />
              <ul className="flex flex-wrap m-minus-5 pt-20">
                {categories.map((category, index) => {
                  return (
                    <Link key={index} href={`/categories/${category.slug}`}>
                      <li>
                        <NeumorphismButton
                          unevenness={'bumps'}
                          shadowColor={'default'}
                          displayText={category.name}
                          className={'rounded-100vh leading-0 m-5 p-16 text-14'}
                        />
                      </li>
                    </Link>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="mt-30 hidden md:block">
            <div className={`${styles.dents} p-15 md:p-30 rounded-12`}>
              <p className="text-16 text-bold">Profile</p>
              <div className={`h-2 mt-20 ${styles.border}`} />
              <div className="mt-20">
                <Link href="https://github.com/io-kobayashiii/techblog">
                  <NeumorphismButton
                    unevenness={'bumps'}
                    shadowColor={'default'}
                    displayText={`<i class="cib-github"></i>`}
                    className={'rounded-100vh leading-0 p-10 text-24'}
                  />
                </Link>
                <Link href="https://twitter.com/iooo231">
                  <NeumorphismButton
                    unevenness={'bumps'}
                    shadowColor={'default'}
                    displayText={`<i class='cib-twitter'></i>`}
                    className={'rounded-100vh leading-0 ml-10 p-10 text-24'}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="text-12 text-center md:mt-50">
          &copy; 2021 - {new Date().getFullYear()} io-kobayashiii All Rights
          Reserved.
        </div>
      </footer>
    </>
  );
};
