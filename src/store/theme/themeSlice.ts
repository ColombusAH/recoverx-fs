// themeSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Themes } from '@/theme/types';
import { ThemeState } from './types';

const initialState: ThemeState = {
  themeMode: (localStorage.getItem('theme-mode') as Themes) || Themes.DARK,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setThemeMode: (state, action: PayloadAction<Themes>) => {
      state.themeMode = action.payload;
      localStorage.setItem('theme-mode', action.payload);
    },
    toggleTheme: (state) => {
      state.themeMode = state.themeMode === Themes.DARK ? Themes.LIGHT : Themes.DARK;
      localStorage.setItem('theme-mode', state.themeMode);
    },
  },
});

export const { setThemeMode, toggleTheme } = themeSlice.actions;
export const themeReducer = themeSlice.reducer;
