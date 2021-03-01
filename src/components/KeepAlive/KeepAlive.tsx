import React, { PureComponent, ReactNode } from 'react';
import AliveContext, { withALive } from './context';
import cn from 'classnames';

export interface IKeepAliveProps {
  idKey: string;
  className?: string;
  saveCache: (idKey: string, children: ReactNode) => Promise<HTMLElement>;
}

export default withALive(
  class extends PureComponent<IKeepAliveProps> {
    node: HTMLDivElement | null;
    static contextType = AliveContext;

    constructor(props: IKeepAliveProps) {
      super(props);
      this.node = null;

      if (!this.props.idKey) {
        throw Error('KeepAlive 组件必须传递idKey，否则cache无法正确保存组件 ');
      }

      this.created();
    }

    async created() {
      const cache = await this.props.saveCache(this.props.idKey, this.props.children);
      if (!this.node) return;

      this.node.appendChild(cache);
    }

    render() {
      const { className = '' } = this.props;
      return (
        <div
          className={cn('keep-alive', className)}
          style={{ width: '100%', height: '100%' }}
          ref={node => (this.node = node)}
        ></div>
      );
    }
  }
);
