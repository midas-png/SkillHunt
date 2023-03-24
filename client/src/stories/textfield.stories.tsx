import { Meta, Story } from '@storybook/react';
import { Textfield } from '../ui';
import { IProps } from '../ui/textfield/props';

export default {
  title: 'UI/textfield',
  component: Textfield,
  argTypes: {
    defaultValue: {
      type: 'string',
      description: 'Textfield value',
      defaultValue: 'Textfield',
      control: {
        type: 'text',
      },
    },
    placeholder: {
      type: 'string',
      description: 'Textfield placeholder',
      control: {
        type: 'text',
      },
    },
  },
} as Meta;

const Template: Story<IProps> = (args) => <Textfield {...args} />;

export const Default = Template.bind({});
