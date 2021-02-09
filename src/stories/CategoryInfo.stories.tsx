import React from "react";
import { Story, Meta } from '@storybook/react/types-6-0';
import CategoryInfo from "../components/CategoryInfo";
import {CategoryInfoProps} from "../types";


export default {
    title: "component/CategoryInfo",
    component: CategoryInfo,
    decorators: [Story => <div style={{display: "flex", justifyContent: "center", alignContent: "center", height: "100%"}}><Story/></div>],
    argTypes: {
        category: {
            description: "Llave para acceder a los datos de la categoría dentro del Contexto",
            type: { name: "string", required: true },
            table: {
                type: { summary: "string" },
                defaultValue: { summary: "Mallas"}
            },
        }
    },
    args: {
      category: "Mallas"
    }
} as Meta

const Template: Story<CategoryInfoProps> = (args) => <CategoryInfo {...args}/>

export const Default = Template.bind({})
Default.args = {
}
