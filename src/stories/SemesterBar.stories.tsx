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
    }
} as Meta

const Template: Story<SemesterBarProps> = (args) => <SemesterBar {...args} />

export const Default = Template.bind({})
Default.args = {
    x: 0,
    y: 0,
    semesters: [[],[],[],[],[]]
}