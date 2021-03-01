import { createContext } from 'react';

// export type IPage = '' | 'Home' | 'Composite' | 'AreaMap';

export type IContext = {
  pageName: string;
  navigate: (page: string) => any;
};

const router = {
  pageName: '',
  navigate: (pageName: string) => {
    router.pageName = pageName;
  },
};

export const RouterContext = createContext(router);
