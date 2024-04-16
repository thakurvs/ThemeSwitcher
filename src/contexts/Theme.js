import { createContext, useContext } from 'react'

export const ThemeContext = createContext({     // cretaing a context here with default themeMode and two methods
    themeMode : 'light',
    darkTheme : () => {},
    lightTheme : () => {},
})

export const ThemeProvider =ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext)
}