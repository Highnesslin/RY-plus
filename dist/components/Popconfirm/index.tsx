import React, { ReactElement, useEffect } from 'react';
import { cloneElement, FC } from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import getElementPosition from './getElementPosition';

import './index.less';

interface IPopconfirmProps {
  component: ReactElement;
}

const container = document.createElement('div');
container.className = 'pop-container';
document.body.appendChild(container);

const Popconfirm: FC<IPopconfirmProps> = ({ children, component }) => {
  // 当组件卸载时清理
  useEffect(() => {
    return () => {
      unmountComponentAtNode(container);
    };
  }, []);

  // 当组件发生变更时清理
  useEffect(() => {
    unmountComponentAtNode(container);
  });

  // 点击时弹窗
  const clickHandle = (e: any) => {
    const { left, top } = getElementPosition(e.target);

    render(
      <div className="pop-confirm" style={{ left, top }}>
        {component}
      </div>,
      container
    );
  };

  // 为组件添加方法
  return children
    ? cloneElement(children as any, {
        onClick: clickHandle,
      })
    : null;
};

export default Popconfirm;
