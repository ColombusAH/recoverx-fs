import { Themes } from '@/theme/types';

type Actions = {
  toggle: () => void;
};
export interface ThemeState {
  themeMode: Themes;
}
export type { Actions };
