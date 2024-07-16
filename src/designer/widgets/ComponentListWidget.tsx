import {FC} from "react";
import Search from "@/only-ui/packages/Input/Search.tsx";


const ComponentListWidget: FC = () => {
  return (
    <div className="px-2 h-[45px] flex items-center">
      <Search
        placeholder="请输入组件名搜索"
      />
    </div>
  )
}

export default ComponentListWidget