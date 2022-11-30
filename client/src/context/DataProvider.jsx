import { Children } from "react";
import { createContext,useState } from "react";

export const DataContext = createContext(null);

const DataProvider = ({children}) =>{

    const[accountName,setAccountName]= useState('');

    return(
        <DataContext.Provider 
            value={{
                accountName,
                setAccountName
            }}
                
        >{children}</DataContext.Provider>
    )

}

export default DataProvider;
