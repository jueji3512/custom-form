import {FC, useContext, useState} from "react";
import LayoutContext from "@/designer/context/LayoutContext.tsx";
import ComponentListWidget from "@/designer/widgets/ComponentListWidget.tsx";
import HistoryWidget from "@/designer/widgets/HistoryWidget.tsx";

type ComponentPanelProps = FC

const ComponentPanel: ComponentPanelProps = () => {
  const [isCollapse, setIsCollapse] = useState(false)
  const {menuItem} = useContext(LayoutContext)

  function handleCollapse() {
    setIsCollapse(preIsCollapse => !preIsCollapse)
  }

  let buttonClasses = 'absolute -right-7 top-1/2 transform -translate-y-1/2 iconfont text-3xl text-slate-400'
  let panelClasses = 'relative h-full shadow-lg duration-500'
  if (isCollapse) {
    buttonClasses += ' icon-arrow-right-fill'
    panelClasses += ' w-0'
  } else {
    buttonClasses += ' icon-arrow-left-fill'
    panelClasses += ' w-[260px]'
  }

  return (
    <div className={panelClasses}>
      <div className="px-6 py-4">
        {
          menuItem.type === 'component' ? <ComponentListWidget /> : <HistoryWidget />
        }
      </div>
      <button
        className={buttonClasses}
        onClick={handleCollapse}
      />
    </div>
  )
}

export default ComponentPanel