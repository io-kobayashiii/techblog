import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArticleCardTitle } from './ArticleCardTitle';

export default {
  title: 'ArticleCardTitle',
  component: ArticleCardTitle,
} as ComponentMeta<typeof ArticleCardTitle>;

const Template: ComponentStory<typeof ArticleCardTitle> = (args) => (
  <ArticleCardTitle {...args} />
);

export const Default = Template.bind({});
Default.args = {
  displayText: 'title',
  className: 'mb-15',
};
