import { Meta, Story } from '@storybook/react';
import { Title } from '../ui';
import { IProps } from '../ui/title/props';

export default {
  title: 'UI/title',
  component: Title,
  argTypes: {
    children: {
      type: 'string',
      description: 'Title content',
      defaultValue: "It's a title",
      control: {
        type: 'text',
      },
    },
    variant: {
      type: 'string',
      description: "Variation of title's font-size",
      defaultValue: 'h2',
      options: ['h1', 'h2', 'h3', 'h4'],
      control: {
        type: 'radio',
      },
    },
    weight: {
      type: 'string',
      description: "Title's font-weight",
      defaultValue: 'medium',
      options: ['bold', 'medium'],
      control: {
        type: 'radio',
      },
    },
    fontSize: {
      type: 'number',
      description: "Title's custom font-size",
      control: {
        type: 'number',
      },
    },
    textAlign: {
      type: 'number',
      description: "Title's text-align",
      defaultValue: 'start',
      options: ['start', 'center', 'end', 'justify'],
      control: {
        type: 'radio',
      },
    },
    light: {
      type: 'boolean',
      description: "Makes title's light if true",
      defaultValue: false,
      control: {
        type: 'boolean',
      },
    },
  },
} as Meta;

const Template: Story<IProps> = (args) => <Title {...args} />;

export const Default = Template.bind({});
