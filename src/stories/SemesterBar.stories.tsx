import React from "react";
import { Story, Meta } from '@storybook/react/types-6-0';
import {SemesterBarProps} from "../types";
import SemesterBar from "../components/SemesterBar";


export default {
    title: "Component/SemesterBar",
    component: SemesterBar,
    decorators: [Story => <div style={{display: "flex", justifyContent: "center", alignContent: "center", height: "100%"}}><svg viewBox={'0 0 1200 20'} width={1200}><Story/></svg></div>],
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
                defaultValue: {summary: 120},
                category: 'course component'

            },
            control: {
                type: 'range',
                min: 10,
                max: 500
            }
        },
        xSeparator: {
            description: 'Distancia entre cada ramo del eje x',
            type: { name: 'number', required: false},
            table: {
                type: { summary: 'number' },
                defaultValue: {summary: 10},

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
                defaultValue: {summary: 20},
                category: 'course component'

            },
            control: {
                type: 'range',
                min: 10,
                max: 100
            }
        }

    },
    semesters: {
        description: "Listado de semestres",
        type: { name: 'array', required: true },
        table: {
            type: { summary: 'array' },
            defaultValue: { summary: [] },
            category: 'component'
        },
        control: {
            type: 'array',
        }
    },
} as Meta

const Template: Story<SemesterBarProps> = (args) => <SemesterBar {...args} />

export const Default = Template.bind({})
Default.args = {
    x: 0,
    y: 0,
    semesters: [[],[],[],[],[]]
}