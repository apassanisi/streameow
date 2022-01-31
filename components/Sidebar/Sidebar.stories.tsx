import { Story } from "@storybook/react";
import Sidebar, { SidebarProps } from "./Sidebar";
import React from 'react';

export default {
  title: "Components/Sidebar",
  component: Sidebar,
};

const Template: Story<SidebarProps> = (args) => <Sidebar {...args} />;

export const Basic = Template.bind({});
Basic.args = { label: "Basic" };

export const __namedExportsOrder = ["Basic"];
