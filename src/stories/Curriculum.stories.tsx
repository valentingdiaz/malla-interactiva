import React from "react";
import { Story, Meta } from '@storybook/react/types-6-0';
import {CurriculumProps} from "../types";
import Curriculum from "../components/Curriculum";


export default {
    title: "Component/Curriculum",
    component: Curriculum,
    decorators: [Story => <div style={{display: "flex", justifyContent: "center", alignContent: "center", height: "100%"}}><svg viewBox={'0 0 1020 600'} width={1020}><Story/></svg></div>],
    argTypes: {
        semesters: {
            description: "Objeto que contiene la información de los semestres",
            type: { name: 'object', required: true },
            table: {
                type: 'object',
                defaultValue: "{ 1: [] }"
            },
        },
    },
} as Meta;


const Template: Story<CurriculumProps> = (args) => <Curriculum {...args}/>

export const Default: Story<CurriculumProps> = Template.bind({})
Default.args = {
    semesters: {
        1: ['IMI-101', 'IMI-102', 'IMI-103'],
        2: ['IMI-102'],
        3: ['IMI-101', 'IMI-103'],
    }
}