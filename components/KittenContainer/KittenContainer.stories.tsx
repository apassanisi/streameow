import { Story } from "@storybook/react";
import KittenContainer, { KittenContainerProps } from "./KittenContainer";
import React from 'react';

export default {
  title: "Components/KittenContainer",
  component: KittenContainer,
};

const Template: Story<KittenContainerProps> = (args) => (
  <KittenContainer {...args} />
);

export const Basic = Template.bind({});
Basic.args = { label: "Basic" };

export const __namedExportsOrder = ["Basic"];
