import {FC, ReactNode, useEffect, useState} from "react";
import {ThemeContext} from "@/designer/context/ThemeContext";
import {themeType} from "@/designer/types";

type ThemeProps = FC<{
  children: ReactNode
}>

const Theme: ThemeProps = ({children}) => {
  const [theme, setTheme] = useState<themeType>('light')
  useEffect(() => {
    const preTheme = localStorage.getItem('theme')
    if (preTheme) {
      setTheme(preTheme as themeType)
      document.documentElement.classList.add(preTheme)
    }
  }, []);

  function toggleTheme(value: themeType) {
    if (value === 'light') {
      document.documentElement.classList.remove('light')
      document.documentElement.classList.add('dark')
      setTheme('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      document.documentElement.classList.add('light')
      setTheme('light')
      localStorage.setItem('theme', 'light')
    }
  }

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}

export default Theme