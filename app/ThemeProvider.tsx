'use client';
 
import { createContext, useState } from 'react';
 
export const ThemeContext = createContext<{theme: string, setTheme: Function}>({theme: '', setTheme: () => ''});
 
export default function ThemeProvider({ children }: {
    children: React.ReactNode
  }) {
    const [theme, setTheme] = useState('dark')
    return <ThemeContext.Provider value={{theme, setTheme}}>{children}</ThemeContext.Provider>;
}