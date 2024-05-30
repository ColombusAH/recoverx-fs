// hotKeysDialogSlice.ts
import { createSlice } from '@reduxjs/toolkit';

interface HotKeysDialogState {
  isOpen: boolean;
}

const initialState: HotKeysDialogState = {
  isOpen: false,
};

const hotKeysDialogSlice = createSlice({
  name: 'hotKeysDialog',
  initialState,
  reducers: {
    toggle: (state) => {
      state.isOpen = !state.isOpen;
    },
    close: (state) => {
      state.isOpen = false;
    },
    open: (state) => {
      state.isOpen = true;
    },
  },
});

export const { toggle, close, open } = hotKeysDialogSlice.actions;
export const hotKeysDialogReducer = hotKeysDialogSlice.reducer;
