import { useCallback } from 'react';
import { atom, useRecoilValue, useSetRecoilState } from 'recoil';

type GlobalNavigationState = boolean;

export const globalNavigationRecoilState = atom<GlobalNavigationState>({
  key: 'globalNavigation',
  default: false,
});

export const useGlobalNavigationState = () => {
  return useRecoilValue(globalNavigationRecoilState);
};

export const useGlobalNavigationRecoilMutator = () => {
  const setState = useSetRecoilState(globalNavigationRecoilState);

  const toggleGlobalNavigationState = useCallback(() => {
    setState((state) => !state);
  }, [setState]);

  const closeGlobalNavigation = useCallback(() => {
    setState(false);
  }, [setState]);

  return { toggleGlobalNavigationState, closeGlobalNavigation };
};
