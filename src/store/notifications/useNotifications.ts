// useNotifications.ts
import { useCallback, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { SnackbarKey } from 'notistack';
import type { Notification, Actions } from './types';
import { pushNotification, closeNotification, removeNotification } from './notificationSlice';
import { AppDispatch, RootState } from '../types';

export function useNotifications(): [Notification[], Actions] {
  const dispatch: AppDispatch = useDispatch();
  const notifications = useSelector((state: RootState) => state.notifications.notifications);

  const push = useCallback(
    (notification: Partial<Notification>) => {
      return dispatch(pushNotification(notification)).payload.options.key as SnackbarKey;
    },
    [dispatch],
  );

  const close = useCallback(
    (key: SnackbarKey, dismissAll = !key) => {
      dispatch(closeNotification(dismissAll ? undefined : key));
    },
    [dispatch],
  );

  const remove = useCallback(
    (key: SnackbarKey) => {
      dispatch(removeNotification(key));
    },
    [dispatch],
  );

  const actions: Actions = useMemo(() => ({ push, close, remove }), [push, close, remove]);

  return [notifications, actions];
}
