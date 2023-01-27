import * as React from 'react';
import { useEffect } from 'react';
import Link from 'next/link';
import styles from './Header.module.scss';
import NeumorphismButton from '@/components/button/NeumorphismButton';
import * as ArticleTypes from '@/types/ArticleTypes';
import { useGlobalNavigationStateContext } from '@/hooks/useGlobalNavigationStateContext';
import { useWindowDimensions } from '@/hooks/useWindowDimensions';

type Props = {
  categories: ArticleTypes.CategoryType[];
};

const Header = ({ categories }: Props) => {
  const { width } = useWindowDimensions();
  const { isGlobalNavigationOpen, setIsGlobalNavigationOpen } =
    useGlobalNavigationStateContext();

  useEffect(() => {
    if (width >= 768) setIsGlobalNavigationOpen(false);
  }, [width]);

  return (
    <>
      <header
        className={`${styles.default} ${styles.header} ${
          isGlobalNavigationOpen ? styles.isGnavSpOpen : ''
        } w-100p overflow-hidden bg-white`}
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
              className={
                'default rounded-6 leading-0 p-8 md:p-16 text-16 md:text-24'
              }
            />
          </div>
          <div className="hidden md:block">
            {/* <Link href="https://twitter.com/?lang=ja">
              <NeumorphismButton
                unevenness={'bumps'}
                shadowColor={'default'}
                displayText={`<i class='cib-twitter'></i>`}
                className={['default', 'rounded-100vh', 'leading-0', 'p-16', 'text-24', 'bg-product-twitter', 'text-white']}
              />
						</Link>
						<Link href="https://qiita.com/">
              <NeumorphismButton
                unevenness={'bumps'}
                shadowColor={'default'}
                displayText={`<i class='cib-qiita'></i>`}
                className={['default', 'rounded-100vh', 'leading-0', 'ml-15', 'p-16', 'text-24', 'bg-product-qiita', 'text-white']}
              />
						</Link> */}
            <Link href="https://github.com/io-kobayashiii/techblog">
              <NeumorphismButton
                unevenness={'bumps'}
                shadowColor={'default'}
                displayText={`<i class="cib-github"></i>`}
                className={
                  'default rounded-100vh leading-0 ml-15 p-16 text-24 bg-product-github text-white'
                }
              />
            </Link>
          </div>
        </div>
        <div className="p-15 md:hidden">
          <div className={`${styles.headerInner} p-15 rounded-12 bg-gray-100`}>
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
                        className={
                          'default rounded-100vh leading-0 m-5 p-16 text-14 bg-white'
                        }
                      />
                    </li>
                  </Link>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="mt-30 p-15 md:hidden">
          <div className={`${styles.headerInner} p-15 rounded-12 bg-gray-100`}>
            <p className="text-16 text-bold pb-5 border-b-2 border-gray-200">
              Profile
            </p>

            <div className="mt-15">
              {/* <Link href="https://twitter.com/?lang=ja">
                <NeumorphismButton unevenness={'bumps'} shadowColor={'default'} displayText={`<i class='cib-twitter'></i>`} className={['default', 'rounded-100vh', 'leading-0', 'p-10', 'text-24', 'bg-white']} />
							</Link>
							<Link href="https://qiita.com/">
                <NeumorphismButton
                  unevenness={'bumps'}
                  shadowColor={'default'}
                  displayText={`<i class='cib-qiita'></i>`}
                  className={['default', 'rounded-100vh', 'leading-0', 'ml-15', 'p-10', 'text-24', 'bg-white']}
                />
                </Link> */}
              <Link href="https://github.com/io-kobayashiii/techblog">
                <NeumorphismButton
                  unevenness={'bumps'}
                  shadowColor={'default'}
                  displayText={`<i class="cib-github"></i>`}
                  className={
                    'default rounded-100vh leading-0 p-10 text-24 bg-white'
                  }
                />
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
