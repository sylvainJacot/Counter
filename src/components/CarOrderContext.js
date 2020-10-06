import React, {createContext, useState} from "react";

export const CardOrderContext = createContext(0);

const CardOrderContextProvider = ({children}) => {

    const [counting,setCounting] = useState(0);
    const [total,setTotal] = useState(0)

    return <>
        <CardOrderContext.Provider value={[counting,setCounting,total,setTotal]}>
            {children}
        </CardOrderContext.Provider>
    </>
}
export default CardOrderContextProvider;
