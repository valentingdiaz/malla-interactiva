import React from "react";
import { Story, Meta } from '@storybook/react/types-6-0';
import YearBar from "../components/YearBar";
import {YearBarProps} from "../types";


export default {
    title: "component/yearBar",
    component: YearBar,
    decorators: [Story => <div style={{display: "flex", justifyContent: "center", alignContent: "center", height: "100%"}}><Story/></div>],
    argTypes: {
        number: {
            description: "Número del año o semi año a representar",
            type: { name: 'number', required: true },
            table: {
                type: { summary: 'number' },
                defaultValue: { summary: 1 },
                category: 'required'
            },
            control: {
                type: 'range',
                min: 1,
                max: 45,
            }
        },
        x: {
            description: "Posición en el eje x del svg",
            type: { name: 'number', required: false },
            table: {
                type: { summary: 'number' },
                defaultValue: { summary: 0 },
                category: 'optional'
            },
            control: {type: 'number'}
        },
        y: {
            description: "Posición en el eje y del svg",
            type: { name: 'number', required: false },
            table: {
                type: { summary: 'number' },
                defaultValue: { summary: 0 },
                category: 'optional'
            },
            control: {type: 'number'}
        },
        courseWidth: {
            description: 'Ancho del ramo en pixeles',
            type: { name: 'number', required: false },
            table: {
                type: { summary: 'number' },
                defaultValue: { summary: 120 },
                category: 'optional'

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
                category: 'optional'

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
                category: 'optional'

            },
            control: {
                type: 'range',
                min: 10,
                max: 100
            }
        },
        halfYear: {
            description: "Indica si el año es de un semestre o no",
            type: { name: 'boolean', required: false },
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: false },
                category: 'optional'
            },
            control: {type: 'boolean'}
        },
        onClick: {
            description: 'Función que se activa al hacer click en el ramo',
            table: {
                category: 'optional',
            }
        }
    }
} as Meta

export const FullYear: Story<YearBarProps> = (args: YearBarProps) => <svg width={args.courseWidth * 2 + args.xSeparator} height={args.height}> <YearBar {...args}/> </svg>
FullYear.args = {
    number: 1,
}

export const HalfYear: Story<YearBarProps> = (args: YearBarProps) => <svg width={args.courseWidth} height={args.height}> <YearBar {...args}/> </svg>
HalfYear.args = {
    number: 2,
    halfYear: true,
}