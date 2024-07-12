import {createContext} from "react";
import {menuItemType} from "@/designer/types";

interface ILayoutContext {
  menuItem: menuItemType
}

const LayoutContext = createContext<ILayoutContext>({
  menuItem: {
    title: '选择组件',
    type: 'component',
    icon: 'component'
  }
})
export default LayoutContext