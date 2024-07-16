import {FC, ReactNode, useContext, useState} from "react";
import LayoutContext from "@/designer/context/LayoutContext.tsx";
import ComponentListWidget from "@/designer/widgets/ComponentListWidget.tsx";
import HistoryWidget from "@/designer/widgets/HistoryWidget.tsx";
import LayerWidget from "@/designer/widgets/LayerWidget.tsx";

type ComponentPanelProps = FC

const ComponentPanel: ComponentPanelProps = () => {
  const [isCollapse, setIsCollapse] = useState(false)
  const {menuItem} = useContext(LayoutContext)

  function handleCollapse() {
    setIsCollapse(preIsCollapse => !preIsCollapse)
  }

  let panelClasses = 'relative h-full shadow-lg duration-500'
  let buttonClasses = 'absolute -right-6 top-1/2 transform -translate-y-1/2 iconfont text-2xl text-slate-400'

  if (isCollapse) {
    buttonClasses += ' icon-arrow-right-fill'
    panelClasses += ' w-0'
  } else {
    buttonClasses += ' icon-arrow-left-fill'
    panelClasses += ' w-[260px]'
  }

  let menu: ReactNode = null
  switch (menuItem.type) {
    case "history":
      menu = <HistoryWidget />
      break
    case "layer":
      menu = <LayerWidget />
      break
    default:
      menu = <ComponentListWidget />
      break
  }

  return (
    <div className={panelClasses}>
      <div className="absolute w-[260px] overflow-hidden top-0 right-0 h-full px-2 py-4">
        {menu}
      </div>
      <button
        className={buttonClasses}
        onClick={handleCollapse}
      />
    </div>
  )
}

export default ComponentPanel