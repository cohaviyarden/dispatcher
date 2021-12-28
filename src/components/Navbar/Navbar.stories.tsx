
import { Meta, Story } from "@storybook/react";
import Navbar, { NavbarProps } from "./Navbar";

export default {
  component: Navbar,
  title: "Components/Navbar",
} as Meta;

const Template: Story<NavbarProps> = (args) => <Navbar {...args} />;


export const Navbar1 = Template.bind({});
Navbar1.args = {
    children: 'AG',
};