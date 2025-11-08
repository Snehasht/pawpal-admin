import { createContext } from "react";

export const PetContext = createContext() // ✅ named export

const PetContextProvider = (props) => {
    const value = {}
    return (
        <PetContext.Provider value={value}>
            {props.children}
        </PetContext.Provider>
    )
}

export default PetContextProvider
