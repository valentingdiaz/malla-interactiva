import React from "react";
import { Story, Meta } from '@storybook/react/types-6-0';
import SemesterBar from "../components/SemesterBar";
import {SemesterBarProps} from "../types";


export default {
    title: "Component/SemesterBar",
    component: SemesterBar,
    decorators: [Story => <div style={{display: "flex", justifyContent: "center", alignContent: "center", height: "100%"}}><Story/></div>],
    argTypes: {
        number: {
            description: "Numero del semestre que indica",
            type: { name: 'number', required: true },
            table: {
                type: { summary: 'number' },
                defaultValue: { summary: 1 },
                category: 'obligatory'
            },
            control: {
                type: 'range',
                min: 1,
                max: 89,
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
                defaultValue: {summary: 120},
                category: 'optional'

            },
            control: {
                type: 'range',
                min: 10,
                max: 500
            }
        },
        height: {
            description: 'altura de la barra en pixeles',
            type: { name: 'number', required: false },
            table: {
                type: { summary: 'number' },
                defaultValue: {summary: 20},
                category: 'optional'

            },
            control: {
                type: 'range',
                min: 10,
                max: 100
            }
        },
        onClick: {
            description: 'Función que se activa al hacer click en el ramo',
            table: {
                category: 'optional',
            }
        }
    }
} as Meta

const Template: Story<SemesterBarProps> = (args) => <svg width={args.courseWidth} height={args.height}> <SemesterBar {...args} />  </svg>

export const Default = Template.bind({})
Default.args = {
    number: 1
}