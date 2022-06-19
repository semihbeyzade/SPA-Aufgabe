import { createContext } from "react";
import { useState } from "react";

export const DataContext = createContext();

const DataContextProvider = (props) => {

    const [name, setName] = useState('Semih')
    const [ort, setOrt] = useState('Düsseldorf')

    return (
        <DataContext.Provider value={{name, setName, ort, setOrt}}>
            {props.children}
        </DataContext.Provider>
    )
}

export default DataContextProvider;