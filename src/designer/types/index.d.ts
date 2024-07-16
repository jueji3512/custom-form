export type menuType = 'component' | 'history' | 'layer'
export type menuItemType = {
  title: string,
  type: menuType,
  icon: string
}
export type menuItemMapType = {
  [key: string]: menuItemType
}

export type themeType = 'light' | 'dark'
