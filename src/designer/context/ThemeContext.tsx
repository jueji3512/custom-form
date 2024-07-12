import {Context, createContext} from "react"
import {themeType} from "@/designer/types";

interface IThemeContext {
  theme: themeType,
  toggleTheme: (value: themeType) => void
}
export type ThemeContextType = IThemeContext


export const ThemeContext: Context<ThemeContextType> = createContext<ThemeContextType>({
  theme: 'light',
  toggleTheme: () => {}
})