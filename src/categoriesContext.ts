import React from "react";
import {CategoriesDict} from "./interfaces";


const CategoriesContext = React.createContext<CategoriesDict>({
    'Mallas': {
        name: 'Plan común',
        color: '#2E58A7',
        whiteText: true
    },
    'Mallas2': {
        name: 'Mallas2',
        color: '#FDDE15',
        whiteText: false
    },
    // "PC": {color: "#00838F", name: "Plan Común"},
    // "FI": {color: "#2E58A7", name: "Fundamentos de Informática"},
	// "HUM": {color: "#B0B91D", name: "Humanistas, libres y deportes"},
	// "TIN": {color: "#C54B73", name: "Transversal e Integración"},
	// "SD": {color: "#991B1E", name: "Sistemas de decisión informática"},
	// "IND": {color: "#6BA8D1", name: "Industrias"},
	// "IS": {color: "#FDDE15", name: "Ingeniería de Software"},
	// "TIC": {color: "#6D57A5", name: "Infraestructura TIC"},
	//  "AN": {color: "#00AD5D", name: "Análisis Numérico"},
	//  "ELEC": {color: "#F78E1E", name: "Electivos Informática"}
})
export default CategoriesContext