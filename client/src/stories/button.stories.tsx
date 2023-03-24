import { Meta, Story } from '@storybook/react';
import { Button } from '../ui';
import { IProps } from '../ui/button/props';

export default {
  title: 'UI/button',
  component: Button,
  argTypes: {
    children: {
      type: 'string',
      description: 'Button content',
      defaultValue: 'Button',
      control: {
        type: 'text',
      },
    },
    variant: {
      type: 'string',
      description: "Variation of button's style",
      defaultValue: 'primary',
      options: ['primary', 'secondary'],
      control: {
        type: 'radio',
      },
    },
    size: {
      type: 'string',
      description: "Button's size",
      defaultValue: 'medium',
      options: ['small', 'medium', 'large', 'full'],
      control: {
        type: 'radio',
      },
    },
    loading: {
      type: 'boolean',
      description: "Button's loading status",
      defaultValue: false,
      control: {
        type: 'boolean',
      },
    },
    disableShadow: {
      type: 'boolean',
      description: "Disables button's box-shadow",
      defaultValue: false,
      control: {
        type: 'boolean',
      },
    },
  },
} as Meta;

const Template: Story<IProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
