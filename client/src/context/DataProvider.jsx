import { Children } from "react";
import { createContext,useState } from "react";



export const DataContext = createContext(null);

export const CartContext = createContext();

export const PageContext = createContext();


const DataProvider = ({children}) =>{

    const[accountName,setAccountName]= useState('');
    const[cartLength,setCartLength]= useState(null);
    const[page,setPage] = useState(1);

    const handleCartLen = (val) =>{
        setCartLength(val);
    }
    const handlePage = (val) =>{
        setPage(++val);
    }

    return(
        <DataContext.Provider 
            value={{
                accountName,
                setAccountName
            }}       
        >
            <CartContext.Provider value={{cartLength,handleCartLen}} >
                <PageContext.Provider value={{page,handlePage} }>
                    {children}
                </PageContext.Provider>
            </CartContext.Provider>
        </DataContext.Provider>
    )

}

export default DataProvider;
