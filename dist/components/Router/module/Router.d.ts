import { PureComponent } from 'react';
interface IState {
  pageName: string;
}
interface IRouterProps {
  initialPath: string;
}
export default class Router extends PureComponent<IRouterProps, IState> {
  constructor(props: IRouterProps);
  navigate(pageName: string): void;
  render(): JSX.Element;
}
export {};
