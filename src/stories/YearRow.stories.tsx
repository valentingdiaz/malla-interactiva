import React from "react";
import { Story, Meta } from '@storybook/react/types-6-0';
import YearRow from "../components/YearRow";
import {YearRowProps} from "../types";

export default {
    title: "component/yearRow",
    component: YearRow,
    decorators: [Story => <div style={{display: "flex", justifyContent: "center", alignContent: "center", height: "100%"}}><svg viewBox={'0 0 900 60'} width={900}><Story/></svg></div>],
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
        semesters: {
            description: 'Listado de semestres',
            type: {name: 'array', required: true},
            table: {
                type: {summary: 'array'},
                defaultValue: { summary: "[]"},
            },
            control: {
                type: "array"
            }
        }
    },
    args: {
        semesters: [[],[],[]]
    }
} as Meta

export const Default: Story<YearRowProps> = (args) => <YearRow {...args}/>