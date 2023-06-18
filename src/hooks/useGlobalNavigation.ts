'use client';

import { useEffect, useState } from 'react';
import { useGlobalNavigationStateContext } from './useGlobalNavigationStateContext';
import { useWindowDimensions } from './useWindowDimensions';

export const useGlobalNavigation = () => {
  const [bodyElement, setBodyElement] = useState<HTMLBodyElement>();
  const [isInitialRendering, setIsInitialRendering] = useState(true);
  const { isGlobalNavigationOpen, setIsGlobalNavigationOpen } =
    useGlobalNavigationStateContext();
  const { width } = useWindowDimensions();

  const toggleOverflowHiddenClass = () => {
    bodyElement?.classList.toggle('overflow-hidden');
  };

  useEffect(() => {
    if (isInitialRendering) {
      setIsInitialRendering(false);
      return;
    }
    toggleOverflowHiddenClass();
  }, [isGlobalNavigationOpen]);

  useEffect(() => {
    setBodyElement(document.getElementById('body') as HTMLBodyElement);
  }, []);

  useEffect(() => {
    if (width >= 768) setIsGlobalNavigationOpen(false);
  }, [width]);

  return { isGlobalNavigationOpen, setIsGlobalNavigationOpen };
};
