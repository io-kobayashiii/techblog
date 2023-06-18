import { useEffect, useState } from 'react';
import { useGlobalNavigationStateContext } from './useGlobalNavigationStateContext';

export const useGlobalNavigation = () => {
  const [bodyElement, setBodyElement] = useState<HTMLBodyElement>();
  const [isInitialRendering, setIsInitialRendering] = useState(true);
  const { isGlobalNavigationOpen } = useGlobalNavigationStateContext();

  const toggleOverflowHiddenClass = () => {
    bodyElement.classList.toggle('overflow-hidden');
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
};
