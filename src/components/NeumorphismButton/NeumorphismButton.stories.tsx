import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { NeumorphismButton } from './NeumorphismButton';

export default {
  title: 'NeumorphismButton',
  component: NeumorphismButton,
} as ComponentMeta<typeof NeumorphismButton>;

const Template: ComponentStory<typeof NeumorphismButton> = (args) => (
  <NeumorphismButton {...args} />
);

export const DentsDefault = Template.bind({});
DentsDefault.args = {
  unevenness: 'dent',
  displayText: 'button',
  className:
    'm-5 rounded-100vh py-5 px-15 md:py-8 md:px-12 text-12 md:text-14 bg-gray-100',
};

export const BumpsDefault = Template.bind({});
BumpsDefault.args = {
  unevenness: 'bump',
  displayText: 'button',
  className:
    'm-5 rounded-100vh py-5 px-15 md:py-8 md:px-12 text-12 md:text-14 bg-gray-100',
};
