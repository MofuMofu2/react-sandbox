import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import Todo from ".";

export default {
  title: "Todo",
  component: Todo,
} as ComponentMeta<typeof Todo>;

const Template: ComponentStory<typeof Todo> = () => <Todo />;

export const TodoApp = Template.bind({});

TodoApp.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  const titleText = await canvas.getByText("TODO List");
  expect(titleText).toBeInTheDocument();
};
