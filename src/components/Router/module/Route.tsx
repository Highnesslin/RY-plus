import React, { Component } from 'react';
import { RouterContext } from './RouterContext';

class Route extends Component<IRouteProps> {
  static match: boolean;
  static context: IRouterContext;
  hasMount: boolean;

  constructor(props: IRouteProps) {
    super(props);
    this.hasMount = false; // 是否已挂载过
  }

  isMatch() {
    return this.props.path !== undefined ? this.context.pageName === this.props.path : true;
  }

  // 渲染默认子节点
  renderDefaultChild() {
    if (!this.props.component) return null;

    // 当前路由匹配
    const match = this.isMatch();

    // return match ? this.props.component : null;
    if (match || (this.props.exitUnDestory && this.hasMount)) {
      this.hasMount = true;
      return this.props.component;
    }

    return null;
  }

  // 渲染接收 Context value 的 Consumer 子节点
  renderContextChild() {
    // 当前路由匹配
    const match = this.isMatch();

    return (
      <RouterContext.Consumer>
        {value => {
          if (match || (this.props.exitUnDestory && this.hasMount)) {
            this.hasMount = true;
            return this.props.render && this.props.render(value);
          }

          return null;
        }}
      </RouterContext.Consumer>
    );
  }

  render() {
    return this.props.render ? this.renderContextChild() : this.renderDefaultChild();
  }
}

Route.contextType = RouterContext;

export default Route;
