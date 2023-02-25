import * as React from 'react';
import { useEffect } from 'react';
import Link from 'next/link';
import styles from './Header.module.scss';
import { NeumorphismButton } from '@/components/NeumorphismButton';
import * as ArticleTypes from '@/types/ArticleTypes';
import { useGlobalNavigationStateContext } from '@/hooks/useGlobalNavigationStateContext';
import { useWindowDimensions } from '@/hooks/useWindowDimensions';

type Props = {
  categories: ArticleTypes.CategoryType[];
};

export const Header = ({ categories }: Props) => {
  const { width } = useWindowDimensions();
  const { isGlobalNavigationOpen, setIsGlobalNavigationOpen } =
    useGlobalNavigationStateContext();

  useEffect(() => {
    if (width >= 768) setIsGlobalNavigationOpen(false);
  }, [width]);

  return (
    <>
      <header
        className={`${styles.header} ${
          isGlobalNavigationOpen ? styles.isGlobalNavigationOpen : ''
        } w-100p overflow-hidden bg-gray-800`}
      >
        <div className="flex justify-between items-center max-w-lg mx-auto px-15 md:px-30 w-100p">
          <Link href="/" onClick={() => setIsGlobalNavigationOpen(false)}>
            <p className={`text-32 md:text-40 ${styles.logo}`}>For</p>
          </Link>
          <div
            onClick={() => setIsGlobalNavigationOpen(!isGlobalNavigationOpen)}
            className="md:hidden"
          >
            <NeumorphismButton
              unevenness={'bumps'}
              shadowColor={'default'}
              displayText={`<i class='cil-hamburger-menu'></i>`}
              className={'rounded-6 leading-0 p-8 md:p-16 text-16 md:text-24'}
            />
          </div>
          <div className="hidden md:block">
            <Link href="https://github.com/io-kobayashiii/techblog">
              <NeumorphismButton
                unevenness={'bumps'}
                shadowColor={'default'}
                displayText={`<i class="cib-github"></i>`}
                className={
                  'rounded-100vh leading-0 ml-15 p-16 text-24 bg-gray-800 text-white'
                }
              />
            </Link>
            <Link href="https://twitter.com/iooo231">
              <NeumorphismButton
                unevenness={'bumps'}
                shadowColor={'default'}
                displayText={`<i class="cib-twitter"></i>`}
                className={
                  'rounded-100vh leading-0 ml-15 p-16 text-24 bg-gray-800 text-white'
                }
              />
            </Link>
          </div>
        </div>
        <div className={`p-15 md:hidden`}>
          <div className={`${styles.dents} p-15 rounded-12`}>
            <p className="text-16 text-bold pb-5 border-b-2 border-gray-200">
              Categories
            </p>
            <ul id="list--category" className="flex flex-wrap m-minus-5 pt-15">
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
                        className={'rounded-100vh leading-0 m-5 p-16 text-14'}
                      />
                    </li>
                  </Link>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="mt-30 p-15 md:hidden">
          <div className={`${styles.dents} p-15 rounded-12`}>
            <p className="text-16 text-bold pb-5 border-b-2 border-gray-200">
              Profile
            </p>

            <div className="mt-15">
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
                  displayText={`<i class="cib-twitter"></i>`}
                  className={'rounded-100vh leading-0 ml-10 p-10 text-24'}
                />
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
