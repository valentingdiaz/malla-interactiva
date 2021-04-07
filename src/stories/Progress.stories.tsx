import {Component} from "react";
import Progress from "../components/Progress";
import {Meta, Story} from "@storybook/react/types-6-0";
import {ProgressProps} from "../types";

export default {
    title: "component/Progress",
    component: Progress,
    argTypes: {
        style: {
            description: "Estilo de la barra",
            type: {name: "object", required: false},
            table: {
                type: { summary: "object"},
                defaultValue: { summary: "{...}", detail: '{\n width: "100%"\n}' } ,
                category: "optional"
            },
            control: {type: 'object'},
            
        },
        min: {
            description: "Valor mínimo de la barra",
            type: { name: "number", required: false },
            table: {
                type: { summary: "number" },
                defaultValue: { summary: 0 },
                category: "optional"
            },
            control: {type: "number"}
        },
        max: {
            description: "Valor máximo de la barra",
            type: { name: "number", required: false },
            table: {
                type: { summary: "number" },
                defaultValue: { summary: 100 },
                category: "optional"
            },
            control: {type: "number"}
        },
        now: {
            description: "Valor actual de la barra",
            type: { name: "number", required: false },
            table: {
                type: { summary: "number" },
                defaultValue: { summary: 0 },
                category: "optional"
            },
            control: {type: "number"}
        },
        text: {
            description: "Texto que acompaña a la barra, <percentage> es remplazado por el porcentaje de progreso",
            type: { name: "string", required: false },
            table: {
                type: { summary: "string" },
                defaultValue: { summary: "<percentage>" },
                category: "optional"
            },
            control: {type: "text"}
        },
        variant: {
            description: "Variante de color a utilizar, se usan las variantes de Bootstrap",
            type: { name: "string", required: false },
            table: {
                type: { summary: "string" },
                defaultValue: { summary: "success" },
                category: "optional"
            },
            control: {type: "text"}
        }
    },


} as Meta

export const Empty: Story<ProgressProps> = (args ) => <Progress {...args} />

Empty.args = {
    style: {width: "100%"},

}

export const HalfFull: Story<ProgressProps> = (args ) => <Progress {...args} />

HalfFull.args = {
    style: {width: "100%"},
    now: 50

}

export const Full: Story<ProgressProps> = (args ) => <Progress {...args} />

Full.args = {
    style: {width: "100%"},
    now: 100

}