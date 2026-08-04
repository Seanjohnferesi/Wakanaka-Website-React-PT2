import {createContext, useState, useContext} from 'react';

const WebsiteContext = createContext();
export const useWebsiteContext = () => useContext(WebsiteContext);

function WebsiteProvider ({children}) {


    return(
        <WebsiteContext.Provider value={
            {
          

            }
        }>
            {children}
        </WebsiteContext.Provider>
    )
}

export default WebsiteProvider;