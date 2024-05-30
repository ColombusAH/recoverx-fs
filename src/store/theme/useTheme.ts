import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from './themeSlice';
import { Themes } from '@/theme/types';
import { AppDispatch, RootState } from '../types';

interface Actions {
  toggle: () => void;
}

export function useTheme(): [Themes, Actions] {
  const dispatch: AppDispatch = useDispatch();
  const themeMode: Themes = useSelector((state: RootState) => state.theme.themeMode);

  const actions: Actions = {
    toggle: () => dispatch(toggleTheme()),
  };

  return [themeMode, actions];
}
