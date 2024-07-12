import {FC} from "react";

type LayoutProps = FC

const WorkSpacePanel: LayoutProps = () => {
  return (
    <div className="flex-1 flex flex-col bg-stone-100 py-4 px-6 rounded-lg dark:bg-zinc-600 duration-500">
      <div className="h-full shadow-md rounded-md bg-slate-50 dark:bg-zinc-700 duration-500">
      </div>
    </div>
  )
}

export default WorkSpacePanel