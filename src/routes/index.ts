import AddTaskIcon from '@mui/icons-material/AddTask';
import BugReportIcon from '@mui/icons-material/BugReport';
import GitHubIcon from '@mui/icons-material/GitHub';
import HomeIcon from '@mui/icons-material/Home';
import TerrainIcon from '@mui/icons-material/Terrain';

import asyncComponentLoader from '@/utils/loader';

import { Pages, Routes } from './types';
import Welcome from '@/pages/Welcome';
import Page1 from '@/pages/Page1';
import PlayerPage from '@/pages/PlayerPage';

const routes: Routes = {
  [Pages.Welcome]: {
    component: Welcome,
    path: '/',
    title: 'Welcome',
    icon: HomeIcon,
  },
  [Pages.Page1]: {
    component: Page1,
    path: '/page-1',
    title: 'Page 1',
    icon: GitHubIcon,
  },
  [Pages.PlayerPage]: {
    component: PlayerPage,
    path: '/player',
    title: 'Player',
    icon: AddTaskIcon,
  },
  [Pages.Page3]: {
    component: asyncComponentLoader(() => import('@/pages/Page3')),
    path: '/page-3',
    title: 'Page 3',
    icon: TerrainIcon,
  },
  [Pages.Page4]: {
    component: asyncComponentLoader(() => import('@/pages/Page4')),
    path: '/page-4',
    title: 'Page 4',
    icon: BugReportIcon,
  },
  [Pages.NotFound]: {
    component: asyncComponentLoader(() => import('@/pages/NotFound')),
    path: '*',
  },
};

export default routes;
