import Homepage from '../components/home';
import Edit from '../components/edit';
import Add from '../components/add';

interface AppRoute {
  path: string;
  exact?: boolean;
  component: any;
}

export interface RoutesMap {
  root: AppRoute;
  edit: AppRoute;
  add: AppRoute;
};

export const allRoutes: RoutesMap = {
  root: {
    path: '/',
    exact: true,
    component: Homepage,
  },
  edit: {
    path: '/edit',
    exact: true,
    component: Edit
  },
  add: {
    path: '/add',
    exact: true,
    component: Add
  }
};

export const routes = Object.keys(allRoutes).map((route) => allRoutes[route as keyof RoutesMap]);
