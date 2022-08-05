import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react';


export const GridListContext = React.createContext();



export default function AppProvider() {
    const [ typeIndustry, setTypeIndustry ] = useState("Y");


    function changeTypeIndustry() {
        setTypeIndustry("N")
    }

    const providerType = {
        typeIndustry: "Y", 
        changeTypeIndustry        
    }

        return (
            <GridListContext.Provider value={providerType}>
                
            </GridListContext.Provider>
        )
} 