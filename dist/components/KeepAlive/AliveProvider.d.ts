import React, { PureComponent } from 'react';
import './AliveProvider.css';
declare type IState = {
    [key: string]: {
        id: string;
        component: React.ReactNode;
    };
};
declare type IProps = {};
export default class AliveProvider extends PureComponent<IProps, IState> {
    container: {
        [key: string]: HTMLDivElement | null;
    };
    constructor(props: IProps);
    saveCache(id: string, component: React.ReactNode): Promise<unknown>;
    render(): JSX.Element;
}
export {};
