import {FC, useContext} from "react";
import {ThemeContext} from "@/designer/context/ThemeContext.tsx";
import Button from "@/only-ui/packages/Button";

type ThemeSwitchProps = FC

const ThemeSwitch: ThemeSwitchProps = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)

  function handleClick() {
    toggleTheme(theme === 'dark' ? 'dark' : 'light')
  }

  let icon = 'light-mode'
  if (theme === 'dark') {
    icon = 'dark-mode'
  }

  return (
    <Button icon={icon} circle onClick={handleClick}></Button>
  )
}

export default ThemeSwitch