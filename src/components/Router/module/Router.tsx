import React, { PureComponent } from 'react';
import { RouterContext } from './RouterContext';

interface IState {
  pageName: string;
}
export default class Router extends PureComponent<IRouterProps, IState> {
  constructor(props: IRouterProps) {
    super(props);

    this.state = {
      pageName: this.props.initialPath,
    };

    this.navigate = this.navigate.bind(this);
  }

  navigate(pageName: string) {
    this.setState({
      pageName: pageName,
    });
  }

  render() {
    return (
      <RouterContext.Provider
        value={{
          pageName: this.state.pageName,
          navigate: this.navigate,
        }}
      >
        {this.props.children}
      </RouterContext.Provider>
    );
  }
}
