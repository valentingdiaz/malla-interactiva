import React from "react";
import { Story, Meta } from '@storybook/react/types-6-0';
import YearBar from "../components/YearBar";
import {YearBarProps} from "../types";


export default {
    title: "component/yearBar",
    component: YearBar,
    decorators: [Story => <div style={{display: "flex", justifyContent: "center", alignContent: "center", height: "100%"}}><svg viewBox={'0 0 250 20'} width={250}><Story/></svg></div>],
    argTypes: {
        x: {
            description: "Posición en el eje x del svg",
            type: { name: 'number', required: false },
            table: {
                type: { summary: 'number' },
                defaultValue: { summary: 0 },
                category: 'component'
            },
            control: {type: 'number'}
        },
        y: {
            description: "Posición en el eje y del svg",
            type: { name: 'number', required: false },
            table: {
                type: { summary: 'number' },
                defaultValue: { summary: 0 },
                category: 'component'
            },
            control: {type: 'number'}
        },
        courseWidth: {
            description: 'Ancho del ramo en pixeles',
            type: { name: 'number', required: false },
            table: {
                type: { summary: 'number' },
                defaultValue: { summary: 120 },
                category: ''

            },
            control: {
                type: 'range',
                min: 10,
                max: 500
            }
        },
        xSeparator: {
            description: 'Distancia entre cada ramo del eje x',
            type: { name: 'number', required: false },
            table: {
                type: { summary: 'number' },
                defaultValue: { summary: 10 },
            },
            control: {
                type: 'range',
                min: 0,
                max: 100
            }
        },
        height: {
            description: 'altura de la barra en pixeles',
            type: { name: 'number', required: false },
            table: {
                type: { summary: 'number' },
                defaultValue: { summary: 20 },
                category: 'course component'

            },
            control: {
                type: 'range',
                min: 10,
                max: 100
            }
        },
        number: {
            description: "Número del año o semi año a representar",
            type: { name: 'number', required: true },
            table: {
                type: { summary: 'number' },
                defaultValue: { summary: 1 },
                category: 'component'
            },
            control: {type: 'number'}
        },
        halfYear: {
            description: "Indica si el año es de un semestre o no",
            type: { name: 'boolean', required: false },
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: false },
                category: 'component'
            },
            control: {type: 'boolean'}

        }
    }
} as Meta

const Template: Story<YearBarProps> = (args: YearBarProps) => <YearBar {...args}/>

export const FullYear = Template.bind({})
FullYear.args = {
    number: 1,
}

export const HalfYear = Template.bind({})
HalfYear.args = {
    x: 65,
    number: 2,
    halfYear: true,
}