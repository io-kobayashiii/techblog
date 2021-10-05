import React from 'react'
import NeumorphismButton from './NeumorphismButton'

export default {
	component: NeumorphismButton,
	title: 'NeumorphismButton',
}

const Template = args => <NeumorphismButton {...args} />

export const DentsDefault = Template.bind({});
DentsDefault.args = {
	unevenness: 'dents',
	color: 'default',
	displayText: 'button',
	additionalClasses: ['default','m-5','rounded-100vh','py-5','px-15','md:py-8','md:px-12','text-12','md:text-14','bg-gray-100']
}