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
            description: "Objeto que contiene información de la categoría",
            type: { name: "object", required: true},
            table: {
                type: { summary: "{...}", detail: "{\n    name: 'string',\n    color: 'string',\n    whiteText?: 'boolean'\n}"}
            }
        },
        onClick: {
            description: 'Función que se activa al hacer click en el ramo',
            table: {
                category: 'optional',
            }
        }

    },
    args: {
      category: "Mallas"
    }
} as Meta

const Template: Story<CategoryInfoProps> = (args) => <CategoryInfo {...args}/>

export const Default = Template.bind({})
Default.args = {
    category: {
        name: "Plan Común",
        color: "#993366"
    }
}
