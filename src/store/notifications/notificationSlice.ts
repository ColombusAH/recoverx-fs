// notificationsSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { SnackbarKey } from 'notistack';
import type { Notification } from './types';
import { notifications as notificationsDefaults } from '@/config';

interface NotificationsState {
  notifications: Notification[];
}

const initialState: NotificationsState = {
  notifications: [],
};

const notificationsSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    pushNotification: {
      reducer: (state, action: PayloadAction<Notification>) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        state.notifications.push(action.payload as any);
      },
      prepare: (notification: Partial<Notification>) => {
        const id = Math.random().toString(); // Replace with a proper ID generator
        return {
          payload: {
            ...notification,
            dismissed: false,
            options: { ...notificationsDefaults.options, key: id },
          } as Notification,
        };
      },
    },
    closeNotification: (state, action: PayloadAction<SnackbarKey | undefined>) => {
      const key = action.payload;
      state.notifications = state.notifications.map((n) =>
        key === undefined || n.options.key === key ? { ...n, dismissed: true } : n,
      );
    },
    removeNotification: (state, action: PayloadAction<SnackbarKey>) => {
      state.notifications = state.notifications.filter((n) => n.options.key !== action.payload);
    },
  },
});

export const { pushNotification, closeNotification, removeNotification } =
  notificationsSlice.actions;
export const notificationReducer = notificationsSlice.reducer;
