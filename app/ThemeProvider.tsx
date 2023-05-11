'use client';
 
import { createContext, useEffect, useState } from 'react';
 
export const ThemeContext = createContext<{theme: string, setTheme: Function}>({theme: '', setTheme: () => ''});
 
export default function ThemeProvider({ children }: {
    children: React.ReactNode
  }) {
    const [theme, setTheme] = useState('dark')
    useEffect(() => {
        if (localStorage.theme) {
            setTheme(localStorage.theme)
        }
    }, [])
    useEffect(() => {
        localStorage.theme = theme;
    }, [theme])
    return <ThemeContext.Provider value={{theme, setTheme}}>{children}</ThemeContext.Provider>;
}