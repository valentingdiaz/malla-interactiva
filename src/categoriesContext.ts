import React from "react";
import {CategoriesDict} from "./interfaces";


const CategoriesContext = React.createContext<CategoriesDict>({
    'Mallas': {
        name: 'Mallas',
        color: '#2E58A7',
        whiteText: true
    },
    'Mallas2': {
        name: 'Mallas2',
        color: '#FDDE15',
        whiteText: false
    },


})

export default CategoriesContext