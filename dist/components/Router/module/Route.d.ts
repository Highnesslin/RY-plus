import React, { Component } from 'react';
declare class Route extends Component<IRouteProps> {
    static match: boolean;
    static context: IRouterContext;
    hasMount: boolean;
    constructor(props: IRouteProps);
    isMatch(): boolean;
    renderDefaultChild(): React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)>) | (new (props: any) => React.Component<any, any, any>)>;
    renderContextChild(): JSX.Element;
    render(): JSX.Element;
}
export default Route;
