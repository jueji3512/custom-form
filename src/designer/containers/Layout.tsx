import {FC, useState} from "react";
import MenuWidget from "@/designer/widgets/MenuWidget.tsx";
import LayoutContext from "@/designer/context/LayoutContext";
import {menuItemMapType, menuItemType} from "@/designer/types";
import ComponentPanel from "@/designer/panels/ComponentPanel.tsx";
import WorkSpacePanel from "@/designer/panels/WorkSpacePanel.tsx";
import SettingPanel from "@/designer/panels/SettingPanel.tsx";

interface LayoutProps {

}

const menuItemMap: menuItemMapType = {
  component: {
    title: '选择组件',
    type: 'component',
    icon: 'component'
  },
  layer: {
    title: '表单层级',
    type: 'layer',
    icon: 'layer'
  },
  history: {
    title: '历史记录',
    type: 'history',
    icon: 'history'
  }
}

const Layout: FC<LayoutProps> = () => {
  const [menuItem, setMenuItem] = useState<menuItemType>(menuItemMap.component)
  function handleMenuChange(menu: menuItemType) {
    setMenuItem(menu)
  }

  return (
    <LayoutContext.Provider value={{ menuItem }}>
      <div
        id="form-designer"
        className="flex h-full p-2 pl-0 duration-500 bg-gradient-to-br from-indigo-400 via-violet-200 to-slate-200 dark:bg-stone-800 dark:bg-none dark:text-slate-50"
      >
        <MenuWidget currentMenuItem={menuItem} menuItemMap={menuItemMap} onMenuChange={handleMenuChange} />
        <main className="flex-1 flex rounded-xl bg-slate-50 overflow-hidden shadow-md dark:bg-zinc-700 duration-500">
          <ComponentPanel />
          <WorkSpacePanel />
          <SettingPanel />
        </main>
      </div>
    </LayoutContext.Provider>
  )
}

export default Layout