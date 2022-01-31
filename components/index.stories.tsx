import { Story } from "@storybook/react";
import Home from "../pages/index";
import React from 'react';

export default {
  title: "Pages/Home",
  component: Home,
};

const Template: Story = (args) => <Home {...args} />;

export const Basic = Template.bind({});

export const __namedExportsOrder = ["Basic"];
