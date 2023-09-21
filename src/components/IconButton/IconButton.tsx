import { classNames } from '@/utils/classNames';
import { SvgIcon } from '@mui/material';

type Props = {
  Icon: typeof SvgIcon;
  size: 'small' | 'inherit' | 'large' | 'medium';
  className?: string;
};

export const IconButton = ({ Icon, size, className }: Props) => {
  return (
    <>
      <button
        className={classNames(
          'rounded-100vh bg-gray-800 p-8 text-white shadow-bump md:p-16',
          className
        )}
      >
        <Icon fontSize={size} />
      </button>
    </>
  );
};
