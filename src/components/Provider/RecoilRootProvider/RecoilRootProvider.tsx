'use client';

import * as React from 'react';
import { RecoilRoot } from 'recoil';

export const RecoilRootProvider = ({ children }): JSX.Element => {
  return <RecoilRoot>{children}</RecoilRoot>;
};
