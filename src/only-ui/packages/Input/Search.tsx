import { FC } from "react"
import Input from "./index.tsx"

export interface ISearchProps {
  placeholder?: string
}

const SearchSuffix: FC = () => {
  return (
    <div className="flex items-center dark:text-white">
      <i className="iconfont icon-search" />
    </div>
  )
}

const Search: FC<ISearchProps> = ({ ...props }) => {
  return (
    <Input suffix={<SearchSuffix />} {...props} />
  )
}
export default Search