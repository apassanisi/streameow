import { Story } from "@storybook/react";
import Kitten, { KittenProps } from "./Kitten";
import React from 'react';

export default {
  title: "Elements/Kitten",
  component: Kitten,
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
    rating: {
      control: { type: "select" },
      options: [1, 2, 3, 4, 5],
    },
  },
};

const Template: Story<KittenProps> = (args) => <Kitten {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  name: "Ace",
  rating: 2,
  region: "SP",
  favorite: true,
  image: "http://placekitten.com/200/200",
};

export const __namedExportsOrder = ["Basic"];
