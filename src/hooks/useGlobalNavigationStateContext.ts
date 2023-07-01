'use client';

import { GlobalNavigationStateContext } from '@/contexts/GlobalNavigationStateContext';
import { useContext } from 'react';

export const useGlobalNavigationStateContext = () => {
  const { isGlobalNavigationOpen, setIsGlobalNavigationOpen } = useContext(
    GlobalNavigationStateContext
  );

  return { isGlobalNavigationOpen, setIsGlobalNavigationOpen };
};
