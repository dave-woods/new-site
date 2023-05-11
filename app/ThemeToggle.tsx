'use client';

import { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";

export default function ThemeToggle() {
    const {theme, setTheme} = useContext(ThemeContext);
    return (
        <button onClick={() => {setTheme(theme === 'dark' ? 'light' : 'dark')}}>Toggle theme</button>
    )
}