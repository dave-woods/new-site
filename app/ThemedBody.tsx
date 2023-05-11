'use client';

import { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";

export default function ThemedBody({children, className}: {
    children: React.ReactNode, className: string
  }){
    const {theme} = useContext(ThemeContext)
    return (
        <body className={[className, `theme-${theme}`].join(' ')}>{children}</body>
    )

}