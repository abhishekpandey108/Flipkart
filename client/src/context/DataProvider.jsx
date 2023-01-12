import { Children } from "react";
import { createContext,useState } from "react";



export const DataContext = createContext(null);

export const CartContext = createContext();




const DataProvider = ({children}) =>{

    const[accountName,setAccountName]= useState('');
    const[cartLength,setCartLength]= useState(null);

    const handleCartLen = (val) =>{
        setCartLength(val);
    }

    return(
        <DataContext.Provider 
            value={{
                accountName,
                setAccountName
            }}       
        >
            <CartContext.Provider value={{cartLength,handleCartLen}} >
            
                {children}
            
            </CartContext.Provider>
        </DataContext.Provider>
    )

}

export default DataProvider;
