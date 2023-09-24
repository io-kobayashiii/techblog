import {
  useGlobalNavigationRecoilMutator,
  useGlobalNavigationState,
} from '@/recoil/globalNavigation';
import { useWindowDimensions } from './useWindowDimensions';
import { useEffect, useMemo } from 'react';

export const useGlobalNavigationVisibilityControl = () => {
  const isOpen = useGlobalNavigationState();
  const { closeGlobalNavigation } = useGlobalNavigationRecoilMutator();
  const { width } = useWindowDimensions();
  const toInvisible = useMemo(() => isOpen && 768 <= width, [isOpen, width]);

  useEffect(() => {
    closeGlobalNavigation();
  }, [toInvisible]);
};
