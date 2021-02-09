import React from "react";
import { Story, Meta } from '@storybook/react/types-6-0';
import CategoryInfo from "../components/CategoryInfo";
import CategoriesContainer from "../components/CategoriesContainer";

export default {
    title: "component/CategoriesContainer",
    component: CategoriesContainer,
    decorators: [Story => <div style={{display: "flex", justifyContent: "center", alignContent: "center", height: "100%"}}><Story/></div>],
} as Meta

export const Default:Story = (args) => <CategoriesContainer/>