import { children, useContext, useState } from "react";
import { createContext } from "react";

const ThemeContext = createContext() //создание контекста

export const ThemeProvider = ({children}) => {

    const [theme, setTheme] = useState('light')
    const toggleTheme = () => setTheme((el)=> (el=== 'light' ? 'dark' : 'light'))
    return(
    <ThemeContext.Provider value={{theme, toggleTheme}}>
        {children}
    </ThemeContext.Provider>
    )
    console.log(useContext(ThemeContext));
    

}

