import { useSelector, useDispatch } from 'react-redux';
import { toggle, open, close } from './sidebarSlice';
import { Actions } from './types';

function useSidebar(): [boolean, Actions] {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: { sidebar: { isOpen: boolean } }) => state.sidebar.isOpen);

  const actions = {
    toggle: () => dispatch(toggle()),
    close: () => dispatch(close()),
    open: () => dispatch(open()),
  };

  return [isOpen, actions];
}

export { useSidebar };
