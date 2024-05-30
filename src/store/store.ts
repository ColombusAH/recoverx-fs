import { configureStore } from '@reduxjs/toolkit';
import { sidebarReducer } from './sidebar/sidebarSlice';
import { themeReducer } from './theme/themeSlice';
import { notificationReducer } from './notifications/notificationSlice';
import { hotKeysDialogReducer } from './hotkeys/hotKeysDialogSlice';

export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    theme: themeReducer,
    notifications: notificationReducer,
    hotKeysDialog: hotKeysDialogReducer,
  },
});
