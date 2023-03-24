import { Meta, Story } from '@storybook/react';
import { Canvas } from '@react-three/fiber';
import { Circle3D } from '../ui';
import { IProps } from '../ui/circle3d/props';

export default {
  title: 'UI/circle3d',
  component: Circle3D,
  argTypes: {
    image: {
      description: 'Circle texture',
      control: {
        type: 'file',
        accept: '.png',
      },
    },
    position: {
      description: 'Circle position',
      defaultValue: [1, 0.3, 0],
      control: {
        type: 'object',
      },
    },
    rotation: {
      description: 'Circle rotation',
      defaultValue: [1.2, 1.3, -0.1],
      control: {
        type: 'object',
      },
    },
    args: {
      description: 'Circle rotation',
      defaultValue: [0.5, 0.5, 0.1, 55, 1],
      control: {
        type: 'object',
      },
    },
  },
} as Meta;

const Template: Story<IProps> = (args) => (
  <Canvas>
    <Circle3D {...args} />
  </Canvas>
);

export const Default = Template.bind({});
