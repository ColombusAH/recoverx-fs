import { useSelector, useDispatch } from 'react-redux';
import { toggle, close, open } from './hotKeysDialogSlice';
import type { Actions } from './types';
import { AppDispatch, RootState } from '../types';

export function useHotKeysDialog(): [boolean, Actions] {
  const dispatch: AppDispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => state.hotKeysDialog.isOpen);

  const actions: Actions = {
    toggle: () => dispatch(toggle()),
    close: () => dispatch(close()),
    open: () => dispatch(open()),
  };

  return [isOpen, actions];
}
