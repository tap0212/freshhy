import RouteNames from 'routeNames';
import Home from 'features/welcome/home';
import Dashboard from 'features/welcome/Dashboard';

const router = {
  [RouteNames.Welcome.home]: Home,
  [RouteNames.Welcome.dashboard]: Dashboard,
};

export default router;
