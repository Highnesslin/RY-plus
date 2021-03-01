import React, { createContext } from 'react';

// keep-alive context，提供一个函数，用来缓存子组件
type IsaveCache = (id: string, component: React.ReactNode) => Promise<unknown>;
const AliveContext = createContext<IsaveCache | null>(null);

// 高阶组件，将子组件作为 AliveContext 的消费者使用
export const withALive = (Comp: React.ElementType) => (props: any) => (
  <AliveContext.Consumer>
    {saveCache => <Comp {...props} saveCache={saveCache} />}
  </AliveContext.Consumer>
);

export default AliveContext;
