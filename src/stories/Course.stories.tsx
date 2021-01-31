import React from "react";
import { Meta } from '@storybook/react/types-6-0';
import Course from "../components/Course";


interface CourseProps {
    id: number,
    sigla: string,
    name: string,
    credits: number,
    x: number,
    y: number,
    color?: string,
}

// Done in order to have type inference
interface AStory {
    (args: CourseProps,): unknown;
    args?: CourseProps;
}
export default {
    title: "Component/Course",
    component: Course,
    decorators: [Story => <svg width={170} height={170}><Story/></svg>]
} as Meta;

const Template: AStory = (args) => <Course {...args} />

export const Programacion: AStory = Template.bind({});

Programacion.args = {
    id: 1,
    name: "Programación",
    sigla: "IWI-131",
    credits: 3,
    x: 5,
    y: 5,
}

// ["Taller Desarrollo de Proyecto de Informática","INF-228",6,10,"TIN",["INF-360"],"P"],
export const TallerDesarrolloDeProyectoDeInformatica = Template.bind({});

TallerDesarrolloDeProyectoDeInformatica.args = {
    id: 54,
    name: "Taller Desarrollo de Proyecto de Informática",
    sigla: "INF-228",
    credits: 6,
    x: 5,
    y: 5,
}
