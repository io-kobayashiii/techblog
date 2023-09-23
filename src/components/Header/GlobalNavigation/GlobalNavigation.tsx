import { IconButton } from '@/components/IconButton';
import { NeumorphismButton } from '@/components/NeumorphismButton';
import Link from 'next/link';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import * as ArticleTypes from '@/types/ArticleTypes';
import { useGlobalNavigationRecoilMutator } from '@/recoil/globalNavigation';

type Props = {
  categories: ArticleTypes.CategoryType[];
};

export const GlobalNavigation = ({ categories }: Props) => {
  const { closeGlobalNavigation } = useGlobalNavigationRecoilMutator();
  return (
    <>
      <div className={`p-15 md:hidden`}>
        <div className="rounded-12 p-15 shadow-dent">
          <p className="text-bold text-16">Categories</p>
          <div className="mt-15 h-2 shadow-border" />
          <ul className="m-minus-5 flex flex-wrap pt-20">
            {categories.map(({ slug, name }, index) => {
              return (
                <Link
                  key={index}
                  href={`/categories/${slug}`}
                  onClick={() => closeGlobalNavigation()}
                >
                  <li>
                    <NeumorphismButton
                      unevenness={'bumps'}
                      shadowColor={'default'}
                      displayText={name}
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
          <div className="mt-15 flex">
            <Link
              href="https://github.com/io-kobayashiii/techblog"
              className="block"
            >
              <IconButton Icon={GitHubIcon} size={'large'} />
            </Link>
            <Link href="https://twitter.com/iooo231" className="ml-15 block">
              <IconButton Icon={TwitterIcon} size={'large'} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
