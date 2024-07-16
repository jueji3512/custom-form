import {FC, useState} from "react";

type SettingPanelProps = FC

const SettingPanel: SettingPanelProps = () => {
  const [isCollapse, setIsCollapse] = useState(false)

  function handleCollapse () {
    setIsCollapse(preIsCollapse => !preIsCollapse)
  }

  let buttonClasses = 'absolute -left-6 top-1/2 transform -translate-y-1/2 iconfont text-2xl text-slate-400'
  let panelClasses = 'relative h-full shadow-lg duration-500'
  if (isCollapse) {
    buttonClasses += ' icon-arrow-left-fill'
    panelClasses += ' w-0'
  } else {
    buttonClasses += ' icon-arrow-right-fill'
    panelClasses += ' w-[260px]'
  }

  return (
    <div className={panelClasses}>
      <button className={buttonClasses} onClick={handleCollapse} />
    </div>
  )
}

export default SettingPanel