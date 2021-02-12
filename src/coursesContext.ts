import React from "react";
import {CoursesDict, DictatedIn} from "./interfaces";


const CoursesContext = React.createContext<CoursesDict>( {
    'IMI-101' : {
        id: 0,
        name: 'Introducción a la malla interactiva',
        abbrev: 'IMI-101',
        dictatedIn: DictatedIn.BOTH,
        creditsUSM: 1,
        creditsSCT: 2,
        category: 'Mallas',
        prers: []
    },
    'IMI-102': {
        id: 1,
        name: "Mallas y Complejidad",
        abbrev: 'IMI-102',
        dictatedIn: DictatedIn.BOTH,
        creditsUSM: 1,
        creditsSCT: 2,
        category: 'Mallas',
        prers: ['IMI-101']
    },
    'IMI-103': {
        id: 2,
        name: "Análisis y Diseño de Mallas",
        abbrev: 'IMI-103',
        dictatedIn: DictatedIn.BOTH,
        creditsUSM: 2,
        creditsSCT: 3,
        category: 'Mallas2',
        prers: ['IMI-101']
    },
})

export default CoursesContext;