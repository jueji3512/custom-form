import {FC} from "react";
import Search from "@/packages/Input/Search.tsx";


const ComponentListWidget: FC = () => {
  return (
    <div className="h-[45px] flex items-center">
      <Search
        id="_search-component"
        placeholder="请输入组件名搜索"
      />
    </div>
  )
}

export default ComponentListWidget