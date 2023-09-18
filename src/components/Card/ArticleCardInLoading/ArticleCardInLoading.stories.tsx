import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArticleCard } from '../ArticleCard/ArticleCard';

export default {
  title: 'ArticleCard',
  component: ArticleCard,
} as ComponentMeta<typeof ArticleCard>;

const Template: ComponentStory<typeof ArticleCard> = (args) => (
  <ArticleCard {...args} />
);

export const Default = Template.bind({});
Default.args = {
  data: {
    title: 'title',
    date: '2021.01.01',
    href: 'https://nextjs.org/',
    categories: ['JavaScript', 'HTML', 'CSS', 'SCSS'],
  },
};
