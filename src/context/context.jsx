import {createContext, useState, useContext} from 'react';

const WebsiteContext = createContext();
export const useWebsiteContext = () => useContext(WebsiteContext);

function WebsiteProvider ({children}) {
    const [isVisible , setIsVisible] = useState(false);

    return(
        <WebsiteContext.Provider value={
            {
                isVisible,
                setIsVisible,
                
            }
        }>
            {children}
        </WebsiteContext.Provider>
    )
}