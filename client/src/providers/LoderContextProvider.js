
import { useReducer } from "react";
import AuthReducer from "../reducers/AuthReducer";
import LoderContext from "../context/LoderContext";
import LoaderReducer from "../reducers/LoaderReducer";



// initial state

export const INITAL_STATE = 0;




// create provider


const LoderContextProvider = ({ children }) => {


    const [ loaderState , loaderDispatch ] = useReducer( LoaderReducer , INITAL_STATE);

   return (

    
    <LoderContext.Provider 
    
    value = {{

        loaderState,
        loaderDispatch
    }}
    
    >

        {children}

    </LoderContext.Provider>

);
   

 }


 // export default

 export default LoderContextProvider;