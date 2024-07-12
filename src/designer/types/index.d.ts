export type menuType = 'component' | 'history'
export type menuItemType = {
  title: string,
  type: menuType,
  icon: string
}
export type menuItemMapType = {
  [key: string]: menuItemType
}

export type themeType = 'light' | 'dark'
