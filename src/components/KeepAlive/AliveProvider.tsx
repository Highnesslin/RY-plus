import React, { PureComponent } from 'react';
import AliveContext from './context';

type IState = {
  [key: string]: {
    id: string;
    component: React.ReactNode;
  };
};
type IProps = {};

export default class AliveProvider extends PureComponent<IProps, IState> {
  container: {
    [key: string]: HTMLDivElement | null;
  };

  constructor(props: IProps) {
    super(props);
    this.state = {};
    this.saveCache = this.saveCache.bind(this);
    this.container = {};
  }

  saveCache(id: string, component: React.ReactNode) {
    return new Promise(resolve => {
      this.setState(
        {
          [id]: {
            id,
            component,
          },
        },
        () => {
          resolve(this.container[id]);
        }
      );
    });
  }

  render() {
    return (
      <AliveContext.Provider value={this.saveCache}>
        {this.props.children}
        {Object.values(this.state).map(item => {
          return (
            <div
              key={item.id}
              className="alive-item"
              style={{ width: '100%', height: '100%' }}
              ref={node => {
                this.container[item.id] = node;
              }}
            >
              {item.component}
            </div>
          );
        })}
      </AliveContext.Provider>
    );
  }
}
