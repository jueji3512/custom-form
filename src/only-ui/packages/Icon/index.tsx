import {FC, HTMLAttributes} from "react";

export interface IIconProps extends HTMLAttributes<HTMLDivElement>{
  name: string
  pointer?: boolean
}
const Icon: FC<IIconProps> = ({ name, pointer = true, ...props }) => {
  let iconClasses = "iconfont " + `icon-${name}`
  if (pointer) iconClasses += " cursor-pointer"
  return (
    <i className={iconClasses} {...props} />
  )
}

export default Icon