import React from "react";
import {Meta, Story} from '@storybook/react/types-6-0';
import Course from "../components/Course";
import {CourseProps} from "../types";
import {DictatedIn} from "../interfaces";

export default {
    title: "Component/Course",
    component: Course,
    decorators: [Story => <div style={{display: "flex", justifyContent: "center", alignContent: "center", height: "100%"}}><Story/></div>],
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
        abbrev: {
            description: 'Identificador del ramo. Se usa como llave para obtener la otra información del ramo',
            type: { name: 'string', required: true },
            table: {
                type: { summary: 'string' },
                category: 'obligatory'

            },
            control: {type: 'text'}
        },
        id: {
            description: 'Identificador numérico del ramo. Se usa para fácil reconocimiento en prerrequisitos',
            type: { name: 'number', required: true },
            table: {
                type: { summary: 'number' },
                category: 'obligatory'

            },
            control: {type: 'number'}
        },
        name: {
            description: 'Nombre del ramo',
            type: { name: 'string', required: true },
            table: {
                type: { summary: 'string' },
                category: 'obligatory'

            },
            control: {type: 'text'}
        },
        dictatedIn: {
            description: "Semestres en que se dicta el ramo",
            type: { name: 'enum', required: true },
            table: {
                type: { name: '"", "A", "P", "I"'},
                category: 'obligatory'
            },
            control: {type: 'select'}
        },
        category: {
            description: 'Identificador de la categoría a la que pertenece el ramo',
            type: { name: 'string', required: true },
            table: {
                type: { summary: 'string' },
                category: 'obligatory'

            },
            control: {type: 'string'}
        },
        creditsUSM: {
            description: 'Créditos USM del ramo',
            type: { name: 'number', required: true },
            table: {
                type: { summary: 'number' },
                category: 'obligatory'

            },
            control: {type: 'number'}
        },
        creditsSCT: {
            description: 'Créditos SCT del ramo',
            type: { name: 'number', required: true },
            table: {
                type: { summary: 'number' },
                category: 'obligatory'

            },
            control: {type: 'number'}
        },
        prers: {
            description: 'Listado de abreviaturas de los ramos prerrequisitos',
            type: { name: 'string', required: true },
            table: {
                type: { summary: 'array' },
                category: 'obligatory'

            },
            control: {type: false}
        },
        x: {
            description: "Posición en el eje x del svg",
            type: { name: 'number', required: false },
            table: {
                type: { summary: 'number' },
                defaultValue: { summary: 5 },
                category: 'optional'
            },
            control: {type: 'number'}
        },
        y: {
            description: 'Posición en el eje y del svg',
            type: { name: 'number', required: false },
            table: {
                type: { summary: 'number' },
                defaultValue: { summary: 5 },
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
        courseHeight: {
            description: 'Altura del ramo en pixeles',
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
        customCategories: {
            description: 'Objeto de categorías. Se usa solamente si custom es verdadero.' +
                '\n**Importante**: Se debe proveer una categoría con la abreviatura del ramo.',
            type: { name: 'object', required: false },
            table: {
                type: { summary: "{ 'string': {...}, ...}", detail: "{\n    'string': {\n        id: 'number',\n        color: 'string',\n        whiteText: 'boolean'\n    },\n    ...\n}" },
                category: 'optional',
                subcategory: 'Custom Categories'
            },
            control: {type: 'object'}
        },
        custom: {
            description: 'Indica si se usa `customCategories` o se obtiene información de las categorías usando un contexto',
            table: {
                category: 'optional',
                subcategory: 'Custom Categories'
            }
        },
        onClick: {
            description: 'Función que se activa al hacer click en el ramo',
            table: {
                category: 'optional',
            }
        }
    },

} as Meta;




const DefaultTemplate: Story<CourseProps> = (args) => <svg width={args.courseWidth + 10} height={args.courseHeight + 10}><Course {...args} /></svg>
// Default

export const Default1: Story<CourseProps> = DefaultTemplate.bind({});
Default1.storyName = "Por Defecto 1"

Default1.args = {
    id: 0,
    name: 'Introducción a la malla interactiva',
    abbrev: 'IMI-101',
    dictatedIn: DictatedIn.BOTH,
    creditsUSM: 1,
    creditsSCT: 2,
    category: 'Mallas',
    prers: []
}

export const Default2: Story<CourseProps> = DefaultTemplate.bind({});
Default2.storyName = "Por Defecto 2"
Default2.args = {
    id: 1,
    name: "Mallas y Complejidad",
    abbrev: 'IMI-102',
    dictatedIn: DictatedIn.BOTH,
    creditsUSM: 1,
    creditsSCT: 2,
    category: 'Mallas',
    prers: ['IMI-101'],
    custom: true,
    customCategories: {
        "IMI-101": {
            id: 0,
            color: '#2E58A7',
            whiteText: true
        },
        "IMI-102": {
            id: 1,
            color: '#2E58A7',
            whiteText: true
        }
    }

}

export const Default3: Story<CourseProps> = DefaultTemplate.bind({});
Default3.storyName = "Por Defecto 3"
Default3.args = {
    id: 2,
    name: "Análisis y Diseño de Mallas",
    abbrev: 'IMI-103',
    dictatedIn: DictatedIn.BOTH,
    creditsUSM: 2,
    creditsSCT: 3,
    category: 'Mallas2',
    prers: ['IMI-101'],
    custom: true,
    customCategories: {
        "IMI-101": {
            id: 0,
            color: '#2E58A7',
            whiteText: true
        },
        "IMI-103": {
            id: 1,
            color: '#FDDE15',
            whiteText: false
        }
    }
}
// Default3.argTypes = {
//     abbrev: {control: false},
//     id: {control: false},
//     name: {control: false},
//     dictatedIn: {control: false},
//     creditsUSM: {control: false},
//     creditsSCT: {control: false},
//     color: {control: false},
//     whiteText: {control: false},
//     prers: {control: false}
//
// }
//
// // Custom
//
// const Template: Story = (args) => {
//     const course:CourseData = {
//         id: args.id,
//         name: args.name,
//         abbrev: args.abbrev,
//         dictatedIn: args.dictatedIn,
//         creditsUSM: args.creditsUSM,
//         creditsSCT: args.creditsSCT,
//         category: "Mallas",
//         prers: [...args.prers] as string[]
//     }
//     const prers: CoursesDict = {
//         "ELO-204": {
//             id: 20,
//             name: args.name,
//             abbrev: "ELO-204",
//             dictatedIn: args.dictatedIn,
//             creditsUSM: args.creditsUSM,
//             creditsSCT: args.creditsSCT,
//             category: "verde",
//             prers: [...args.prers] as string[]
//         },
//         "ELO-320": {
//             id: 15,
//             name: args.name,
//             abbrev: "ELO-320",
//             dictatedIn: args.dictatedIn,
//             creditsUSM: args.creditsUSM,
//             creditsSCT: args.creditsSCT,
//             category: "morado",
//             prers: [...args.prers] as string[]
//         },
//         "ELO-322": {
//             id: 16,
//             name: args.name,
//             abbrev: "ELO-322",
//             dictatedIn: args.dictatedIn,
//             creditsUSM: args.creditsUSM,
//             creditsSCT: args.creditsSCT,
//             category: "naranjo",
//             prers: [...args.prers] as string[]
//         },
//         "MAT-023": {
//             id: 13,
//             name: args.name,
//             abbrev: "MAT-023",
//             dictatedIn: args.dictatedIn,
//             creditsUSM: args.creditsUSM,
//             creditsSCT: args.creditsSCT,
//             category: "verde",
//             prers: [...args.prers] as string[]
//         },
//     }
//
//     const categories: CategoriesDict = {
//         "Mallas" : {
//             name: "Mallas",
//             color: args.color,
//             whiteText: args.whiteText
//         },
//         'verde': {
//             name: 'Mallas2',
//             color: '#92D050',
//             whiteText: false
//         },
//         'morado': {
//             name: 'Mallas2',
//             color: '#813FA0',
//             whiteText: true
//         },
//         'naranjo': {
//             name: 'Mallas2',
//             color: '#FF7B7B',
//             whiteText: false
//         }
//     }
//
//     const abbrev = args.abbrev
//     return <>
//         <CoursesContext.Provider value={{[abbrev]: course, ...prers}}>
//         <CategoriesContext.Provider
//         value={{...categories}}><Course abbrev={args.abbrev}/></CategoriesContext.Provider> </CoursesContext.Provider></>
// }
//
// export const Programacion: Story = Template.bind({});
// Programacion.storyName = "Programación"
// Programacion.argTypes = {
//     color: {control: 'color'},
//     prers: {control: 'array'}
// }
//
// Programacion.args = {
//     id: 1,
//     name: "Programación",
//     abbrev: "IWI-131",
//     dictatedIn: "A",
//     creditsUSM: 3,
//     creditsSCT: 5,
//     color: "#2E58A7",
//     whiteText: true,
//     prers: [],
//     x: 5,
//     y: 5,
// }
//
// export const TDdPdI: Story = Template.bind({});
// TDdPdI.storyName = "Minería de datos"
// TDdPdI.argTypes = {
//     color: {control: 'color'},
//     prers: {control: 'array'}
// }
//
//
//
// TDdPdI.args = {
//     id: 49,
//     name: "Minería de datos",
//     abbrev: "TEL-354",
//     dictatedIn: "P",
//     creditsUSM: 3,
//     creditsSCT: 5,
//     color: "#813FA0",
//     whiteText: true,
//     prers: ["ELO-204", "ELO-320", "ELO-322", "MAT-023"],
//     x: 5,
//     y: 5,
// }
