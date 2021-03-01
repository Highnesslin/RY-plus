import { useContext } from 'react';
import { RouterContext } from '../module/RouterContext';
export var useRouter = function () { return useContext(RouterContext); };
