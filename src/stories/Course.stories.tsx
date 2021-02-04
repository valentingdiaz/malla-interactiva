import React from "react";
import { Meta } from '@storybook/react/types-6-0';
import Course from "../components/Course";
import CoursesContext from "../coursesContext";
import CategoriesContext from "../categoriesContext";
import {CategoriesDict, CoursesDict} from "../interfaces";


interface DefaultCourseProps {
    x: number,
    y: number,
    abbrev?: string,
    id?: number,
    name?: string,
    creditsUSM?: number,
    creditsSCT?: number
}

// Done in order to have type inference
interface DefaultStory {
    (args: DefaultCourseProps,): unknown;
    args?: DefaultCourseProps;
    storyName?: string;
}

interface CourseStoryProps {
    x: number,
    y: number,
    abbrev: string,
    id: number,
    name: string,
    creditsUSM: number,
    creditsSCT: number,
    color: string,
    prers: string[]
    whiteText: boolean,
}

interface AStory {
    (args: CourseStoryProps,): unknown;
    args?: CourseStoryProps;
    storyName?: string;
}

export default {
    title: "Component/Course",
    component: Course,
    decorators: [Story => <div style={{display: "flex", justifyContent: "center", alignContent: "center", height: "100%"}}><svg width={130} height={130}><Story/></svg></div>],
    argTypes: {
        x: {
            description: "Posición en el eje x del svg",
            type: { name: 'number', required: true },
            table: {
                type: { summary: 'number' },
                defaultValue: { summary: 5 },
                category: 'component'
            },
            control: {type: 'number'}
        },
        y: {
            description: 'Posición en el eje y del svg',
            type: { name: 'number', required: true },
            table: {
                type: { summary: 'number' },
                defaultValue: { summary: 5 },
                category: 'component'

            },
            control: {type: 'number'}
        },
        abbrev: {
            description: 'Identificador del ramo. Se usa como llave para obtener la otra información del ramo',
            type: { name: 'string', required: true },
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'IWI-131' },
                category: 'component'

            },
            control: {type: 'text'}
        },
        id: {
            description: 'Identificador numérico del ramo. Se usa para facil reconocimiento en prerrequisitos',
            type: { name: 'number', required: false },
            table: {
                type: { summary: 'number' },
                defaultValue: { summary: 0 },
                category: 'story exclusive'

            },
            control: {type: 'number'}
        },
        name: {
            description: 'Nombre del ramo',
            type: { name: 'string', required: false },
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'Introducción a la Malla Interactiva' },
                category: 'story exclusive'

            },
            control: {type: 'text'}
        },
        creditsUSM: {
            description: 'Créditos USM del ramo',
            type: { name: 'number', required: false },
            table: {
                type: { summary: 'number' },
                defaultValue: { summary: 1 },
                category: 'story exclusive'

            },
            control: {type: 'number'}
        },
        creditsSCT: {
            description: 'Créditos SCT del ramo',
            type: { name: 'number', required: false },
            table: {
                type: { summary: 'number' },
                defaultValue: { summary: 2 },
                category: 'story exclusive'

            },
            control: {type: 'number'}
        },
        color: {
            description: 'Color del ramo',
            type: { name: 'string', required: false },
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: '#2E58A7' },
                category: 'story exclusive'

            },
            control: {type: 'color'}
        },
        prers: {
            description: 'Listado de abreviaturas de los ramos prerrequisitos',
            type: { name: 'string', required: false },
            table: {
                type: { summary: 'array' },
                defaultValue: { summary: '[]' },
                category: 'story exclusive'

            },
            control: {type: 'array'}
        }
    }

} as Meta;

const DefaultTemplate: DefaultStory = (args) => <Course {...args} />

// Default

export const Default1: DefaultStory = DefaultTemplate.bind({});
Default1.storyName = "Por Defecto 1"
Default1.argTypes = {
    abbrev: {control: false}
}

export const Default2: DefaultStory = DefaultTemplate.bind({});
Default2.storyName = "Por Defecto 2"
Default2.args = {
    abbrev: "IMI-102",
    x: 5,
    y: 5
}
Default2.argTypes = {
    abbrev: {control: false}
}

export const Default3: DefaultStory = DefaultTemplate.bind({});
Default3.storyName = "Por Defecto 3"
Default3.args = {
    abbrev: "IMI-103",
    x: 5,
    y: 5
}
Default3.argTypes = {
    abbrev: {control: false}
}

// Custom

const Template: AStory = (args) => {
    const course = {
        id: args.id,
        name: args.name,
        abbrev: args.abbrev,
        creditsUSM: args.creditsUSM,
        creditsSCT: args.creditsSCT,
        category: "Mallas",
        prers: [...args.prers] as string[]
    }
    const prers: CoursesDict = {
        "ELO-204": {
            id: 20,
            name: args.name,
            abbrev: "ELO-204",
            creditsUSM: args.creditsUSM,
            creditsSCT: args.creditsSCT,
            category: "verde",
            prers: [...args.prers] as string[]
        },
        "ELO-320": {
            id: 15,
            name: args.name,
            abbrev: "morado",
            creditsUSM: args.creditsUSM,
            creditsSCT: args.creditsSCT,
            category: "morado",
            prers: [...args.prers] as string[]
        },
        "ELO-322": {
            id: 16,
            name: args.name,
            abbrev: "naranjo",
            creditsUSM: args.creditsUSM,
            creditsSCT: args.creditsSCT,
            category: "naranjo",
            prers: [...args.prers] as string[]
        },
        "MAT-023": {
            id: 13,
            name: args.name,
            abbrev: "verde",
            creditsUSM: args.creditsUSM,
            creditsSCT: args.creditsSCT,
            category: "verde",
            prers: [...args.prers] as string[]
        },
    }

    const categories: CategoriesDict = {
        "Mallas" : {
            name: "Mallas",
            color: args.color,
            whiteText: args.whiteText
        },
        'verde': {
            name: 'Mallas2',
            color: '#92D050',
            whiteText: false
        },
        'morado': {
            name: 'Mallas2',
            color: '#813FA0',
            whiteText: true
        },
        'naranjo': {
            name: 'Mallas2',
            color: '#FF7B7B',
            whiteText: false
        }
    }

    const abbrev = args.abbrev
    return <>
        <CoursesContext.Provider value={{[abbrev]: course, ...prers}}>
        <CategoriesContext.Provider
        value={{...categories}}><Course abbrev={args.abbrev}/></CategoriesContext.Provider> </CoursesContext.Provider></>
}

export const Programacion: AStory = Template.bind({});
Programacion.storyName = "Programación"
Programacion.argTypes = {
    color: {control: 'color'},
    prers: {control: 'array'}
}

Programacion.args = {
    id: 1,
    name: "Programación",
    abbrev: "IWI-131",
    creditsUSM: 3,
    creditsSCT: 5,
    color: "#2E58A7",
    whiteText: true,
    prers: [],
    x: 5,
    y: 5,
}

export const TDdPdI: AStory = Template.bind({});
TDdPdI.storyName = "Minería de datos"
TDdPdI.argTypes = {
    color: {control: 'color'},
    prers: {control: 'array'}
}



TDdPdI.args = {
    id: 49,
    name: "Minería de datos",
    abbrev: "TEL-354",
    creditsUSM: 3,
    creditsSCT: 5,
    color: "#813FA0",
    whiteText: true,
    prers: ["ELO-204", "ELO-320", "ELO-322", "MAT-023"],
    x: 5,
    y: 5,
}
