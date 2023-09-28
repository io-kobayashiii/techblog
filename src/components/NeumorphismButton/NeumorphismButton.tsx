import * as React from 'react';
import { classNames } from '@/utils/classNames';

type Props = {
  unevenness: 'dent' | 'bump';
  displayText: string;
  className?: string;
};

export const NeumorphismButton = ({
  unevenness,
  displayText,
  className,
}: Props) => {
  const unevennessClass = (() => {
    if (unevenness === 'bump') return 'shadow-bump-sm';
    return 'shadow-dent-sm';
  })();
  return (
    <button
      className={classNames(className, unevennessClass)}
      dangerouslySetInnerHTML={{ __html: displayText }}
    />
  );
};
