import * as React from 'react';
import styles from './NeumorphismButton.module.scss';

type Props = {
  unevenness: 'dents' | 'bumps';
  shadowColor: 'default' | 'primary';
  displayText: string;
  className?: string;
};

export const NeumorphismButton = ({
  unevenness,
  shadowColor,
  displayText,
  className,
}: Props) => {
  return (
    <button
      className={`${className ?? ''} ${styles[`${unevenness}-${shadowColor}`]}`}
      dangerouslySetInnerHTML={{ __html: displayText }}
    ></button>
  );
};
