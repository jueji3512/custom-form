import {FC} from "react";
import Input from '@/only-ui/packages/Input'

type LayoutProps = FC

const WorkSpacePanel: LayoutProps = () => {


  return (
    <div className="flex-1 flex flex-col bg-stone-100 py-4 px-6 rounded-lg dark:bg-zinc-600 duration-500">
      <div className="h-full shadow-md rounded-md bg-slate-50 dark:bg-zinc-700 duration-500">
        <div className="p-4 border-2 border-stone-500">
          <Input error suffix={<div>555</div>} defaultValue="ccc" showCount />
        </div>
      </div>
    </div>
  )
}

export default WorkSpacePanel