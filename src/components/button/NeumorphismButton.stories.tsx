import React from 'react';
import NeumorphismButton from './NeumorphismButton';

const exportComponent = {
  component: NeumorphismButton,
  title: 'NeumorphismButton',
};
export default exportComponent;

const Template = (args) => <NeumorphismButton {...args} />;

export const DentsDefault = Template.bind({});
DentsDefault.args = {
  unevenness: 'dents',
  shadowColor: 'default',
  displayText: 'button',
  className: [
    'm-5',
    'rounded-100vh',
    'py-5',
    'px-15',
    'md:py-8',
    'md:px-12',
    'text-12',
    'md:text-14',
    'bg-gray-100',
  ],
};

export const BumpsDefault = Template.bind({});
BumpsDefault.args = {
  unevenness: 'bumps',
  shadowColor: 'default',
  displayText: 'button',
  className: [
    'm-5',
    'rounded-100vh',
    'py-5',
    'px-15',
    'md:py-8',
    'md:px-12',
    'text-12',
    'md:text-14',
    'bg-gray-100',
  ],
};
