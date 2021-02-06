import React from "react";
import { Story, Meta } from '@storybook/react/types-6-0';
import Semester from "../components/Semester";
import {SemesterProps} from "../types";


export default {
    title: "Component/Semester",
    component: Semester,
    decorators: [Story => <div style={{display: "flex", justifyContent: "center", alignContent: "center", height: "100%"}}><svg viewBox={'0 0 120 900'} width={120}><Story/></svg></div>],
    argTypes: {
        x: {
            description: "Posición en el eje x del svg",
            type: { name: 'number', required: false },
            table: {
                type: { summary: 'number' },
                defaultValue: { summary: 5 },
                category: 'component'
            },
            control: {type: 'number'}
            },
        y: {
            description: "Posición en el eje y del svg",
            type: { name: 'number', required: false },
            table: {
                type: { summary: 'number' },
                defaultValue: { summary: 5 },
                category: 'component'
            },
            control: {type: 'number'}
        },
        number: {
            description: "Número del Semestre",
            type: { name: 'number', required: true },
            table: {
                type: { summary: 'number' },
                defaultValue: { summary: 1 },
                category: 'component'
            },
            control: {type: 'number'}
        },
        courses: {
            description: 'Listado de abreviaturas de los ramos del semestre',
            type: { name: 'string', required: true },
            table: {
                type: { summary: 'array' },
                defaultValue: { summary: '[]' },
                category: 'component'

            },
            control: {type: 'array'}
        }

    }
} as Meta;


const Template: Story<SemesterProps> = (args) => <Semester {...args}/>

export const DefaultSemester: Story<SemesterProps> = Template.bind({})
DefaultSemester.args = {
    number: 1,
    courses: ['IMI-101', 'IMI-102', 'IMI-103']
}

