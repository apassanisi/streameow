import { Story } from "@storybook/react";
import Footer from "./Footer";
import React from 'react';

export default {
  title: "Elements/Footer",
  component: Footer,
};

const Template: Story = (args) => <Footer {...args} />;

export const Basic = Template.bind({});

export const __namedExportsOrder = ["Basic"];
