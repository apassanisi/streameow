import { Story } from "@storybook/react";
import Button, { ButtonProps } from "./Button";
import React from 'react';

const icons = ["search", "up", "down", "left", "right", "none"];

export default {
  title: "Elements/Button",
  component: Button,
  argTypes: {
    prependIcon: {
      control: { type: "select" },
      options: icons,
    },
    appendIcon: {
      control: { type: "select" },
      options: icons,
    },
  },
};

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Basic = Template.bind({});
Basic.args = { label: "Basic" };

export const WithDropdown = Template.bind({});
WithDropdown.args = {
  label: "Dropdown",
  appendIcon: "down",
  dropdown: ["one", "two", "three"],
};

export const WithLink = Template.bind({});
WithLink.args = { label: "With Link", to: "example.com" };

export const __namedExportsOrder = ["Basic", "WithLink", "WithDropdown"];
