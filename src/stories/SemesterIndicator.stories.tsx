import React from "react";
import { Story, Meta } from '@storybook/react/types-6-0';
import SemesterIndicator from "../components/SemesterIndicator";
import {SemesterIndicatorProps} from "../types";


export default {
    title: "Component/SemesterIndicator",
    component: SemesterIndicator,
    decorators: [Story => <div style={{display: "flex", justifyContent: "center", alignContent: "center", height: "100%"}}><svg viewBox={'0 0 120 20'} width={120}><Story/></svg></div>],
    argTypes: {
        x: {
            description: "Posición en el eje x del svg",
            type: { name: 'number', required: true },
            table: {
                type: { summary: 'number' },
                defaultValue: { summary: 0 },
                category: 'component'
            },
            control: {type: 'number'}
        },
        y: {
            description: "Posición en el eje y del svg",
            type: { name: 'number', required: true },
            table: {
                type: { summary: 'number' },
                defaultValue: { summary: 0 },
                category: 'component'
            },
            control: {type: 'number'}
        },
        number: {
            description: "Numero del semestre que indica",
            type: { name: 'number', required: true },
            table: {
                type: { summary: 'number' },
                defaultValue: { summary: 1 },
                category: 'component'
            },
            control: {
                type: 'range',
                min: 1,
                max: 89,
            }
        },
    }
} as Meta

const Template: Story<SemesterIndicatorProps> = (args) => <SemesterIndicator {...args} />

export const Default = Template.bind({})
Default.args = {
    x: 0,
    y: 0,
    number: 1
}