import { useContext } from 'react';
import { RouterContext } from '../module/RouterContext';

export const useRouter = () => useContext(RouterContext);
