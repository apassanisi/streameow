import { Story } from "@storybook/react";
import Navbar, { NavbarProps } from "./Navbar";
import React from 'react';

export default {
  title: "Components/Navbar",
  component: Navbar,
};

const Template: Story<NavbarProps> = (args) => <Navbar {...args} />;

export const Basic = Template.bind({});

export const __namedExportsOrder = ["Basic"];
