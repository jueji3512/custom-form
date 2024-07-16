import {FC, ReactNode} from "react";

export interface ITreeProps {
  children?: ReactNode
  data?: ITreeNode[]

}

export interface ITreeNode {
  id: string
  label: string
  children?: ITreeNode[]
}

const Tree: FC<ITreeProps> = (props) => {
  console.log(props)

  return (
    <div>
      Tree
    </div>
  )
}

export default Tree