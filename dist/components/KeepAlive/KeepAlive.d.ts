import { ReactNode } from 'react';
import './KeepAlive.css';
export interface IKeepAliveProps {
    idKey: string;
    className?: string;
    saveCache: (idKey: string, children: ReactNode) => Promise<HTMLElement>;
}
declare const _default: (props: any) => JSX.Element;
export default _default;
