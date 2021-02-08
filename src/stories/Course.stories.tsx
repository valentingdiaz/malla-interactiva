import React from "react";
import { Story, Meta } from '@storybook/react/types-6-0';
import Course from "../components/Course";
import CoursesContext from "../coursesContext";
import CategoriesContext from "../categoriesContext";
import {CategoriesDict, CourseData, CoursesDict} from "../interfaces";

export default {
    title: "Component/Course",
    component: Course,
    decorators: [Story => <div style={{display: "flex", justifyContent: "center", alignContent: "center", height: "100%"}}><svg width={130} height={130}><Story/></svg></div>],
    parameters: {
        backgrounds: {
            values: [
                { name: 'white', value: '#fff' },
                { name: 'white', value: '#eee' },
                { name: 'white', value: '#ddd' },
                { name: 'white', value: '#ccc' },
                { name: 'white', value: '#bbb' },
                { name: 'white', value: '#aaa' },
                { name: 'white', value: '#999' },
                { name: 'white', value: '#888' },
                { name: 'white', value: '#777' },
                { name: 'white', value: '#666' },
                { name: 'white', value: '#555' },
                { name: 'white', value: '#444' },
                { name: 'white', value: '#333' },
                { name: 'white', value: '#222' },
                { name: 'white', value: '#111' },
                { name: 'black', value: '#000' },
            ],
        },
    },
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
        courseWidth: {
            description: 'Ancho del ramo en pixeles',
            type: { name: 'number', required: false },
            table: {
                type: { summary: 'number' },
                defaultValue: {summary: 120},
                category: 'component'

            },
            control: {
                type: 'range',
                min: 10,
                max: 500
            }
        },
        courseHeight: {
            description: 'Altura del ramo en pixeles',
            type: { name: 'number', required: false },
            table: {
                type: { summary: 'number' },
                defaultValue: {summary: 120},
                category: 'component'

            },
            control: {
                type: 'range',
                min: 10,
                max: 500
            }
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
            description: 'Identificador numérico del ramo. Se usa para fácil reconocimiento en prerrequisitos',
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
        dictatedIn: {
            description: "Semestres en que se dicta el ramo",
            type: "string",
            table: {
                type: 'string',
                defaultValue: "",
                category: "story exclusive"
            },
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
        whiteText: {
            description: 'Color del texto con el nombre',
            type: { name: 'boolean', required: false},
            table: {
                type: 'boolean',
                defaultValue: true,
                category: 'story exclusive'
            },
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

const DefaultTemplate: Story = (args) => <Course {...args} />
// Default

export const Default1: Story = DefaultTemplate.bind({});
Default1.storyName = "Por Defecto 1"
Default1.argTypes = {
    abbrev: {control: false},
    id: {control: false},
    name: {control: false},
    dictatedIn: {control: false},
    creditsUSM: {control: false},
    creditsSCT: {control: false},
    color: {control: false},
    whiteText: {control: false},
    prers: {control: false}

}

export const Default2: Story = DefaultTemplate.bind({});
Default2.storyName = "Por Defecto 2"
Default2.args = {
    abbrev: "IMI-102",
    x: 5,
    y: 5
}
Default2.argTypes = {
    abbrev: {control: false},
    id: {control: false},
    name: {control: false},
    dictatedIn: {control: false},
    creditsUSM: {control: false},
    creditsSCT: {control: false},
    color: {control: false},
    whiteText: {control: false},
    prers: {control: false}

}

export const Default3: Story = DefaultTemplate.bind({});
Default3.storyName = "Por Defecto 3"
Default3.args = {
    abbrev: "IMI-103",
    x: 5,
    y: 5
}
Default3.argTypes = {
    abbrev: {control: false},
    id: {control: false},
    name: {control: false},
    dictatedIn: {control: false},
    creditsUSM: {control: false},
    creditsSCT: {control: false},
    color: {control: false},
    whiteText: {control: false},
    prers: {control: false}

}

// Custom

const Template: Story = (args) => {
    const course:CourseData = {
        id: args.id,
        name: args.name,
        abbrev: args.abbrev,
        dictatedIn: args.dictatedIn,
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
            dictatedIn: args.dictatedIn,
            creditsUSM: args.creditsUSM,
            creditsSCT: args.creditsSCT,
            category: "verde",
            prers: [...args.prers] as string[]
        },
        "ELO-320": {
            id: 15,
            name: args.name,
            abbrev: "ELO-320",
            dictatedIn: args.dictatedIn,
            creditsUSM: args.creditsUSM,
            creditsSCT: args.creditsSCT,
            category: "morado",
            prers: [...args.prers] as string[]
        },
        "ELO-322": {
            id: 16,
            name: args.name,
            abbrev: "ELO-322",
            dictatedIn: args.dictatedIn,
            creditsUSM: args.creditsUSM,
            creditsSCT: args.creditsSCT,
            category: "naranjo",
            prers: [...args.prers] as string[]
        },
        "MAT-023": {
            id: 13,
            name: args.name,
            abbrev: "MAT-023",
            dictatedIn: args.dictatedIn,
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

export const Programacion: Story = Template.bind({});
Programacion.storyName = "Programación"
Programacion.argTypes = {
    color: {control: 'color'},
    prers: {control: 'array'}
}

Programacion.args = {
    id: 1,
    name: "Programación",
    abbrev: "IWI-131",
    dictatedIn: "A",
    creditsUSM: 3,
    creditsSCT: 5,
    color: "#2E58A7",
    whiteText: true,
    prers: [],
    x: 5,
    y: 5,
}

export const TDdPdI: Story = Template.bind({});
TDdPdI.storyName = "Minería de datos"
TDdPdI.argTypes = {
    color: {control: 'color'},
    prers: {control: 'array'}
}



TDdPdI.args = {
    id: 49,
    name: "Minería de datos",
    abbrev: "TEL-354",
    dictatedIn: "P",
    creditsUSM: 3,
    creditsSCT: 5,
    color: "#813FA0",
    whiteText: true,
    prers: ["ELO-204", "ELO-320", "ELO-322", "MAT-023"],
    x: 5,
    y: 5,
}
