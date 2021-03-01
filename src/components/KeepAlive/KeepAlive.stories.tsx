import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import KeepAlive, { IKeepAliveProps } from './KeepAlive';
import '../../styles/index.scss';
import { AliveProvider } from '.';

export default {
  title: 'KeepAlive',
  component: KeepAlive,
} as Meta;

const Home = () => <div>Home</div>;
const User = () => <div>User</div>;

const Template: Story<IKeepAliveProps> = args => {
  return (
    <AliveProvider>
      <KeepAlive idKey="home">
        <Home />
      </KeepAlive>
      <KeepAlive idKey="user">
        <User />
      </KeepAlive>
    </AliveProvider>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  idKey: 'map',
};
