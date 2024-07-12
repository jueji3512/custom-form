import {FC, ReactNode} from "react";

export interface IButtonProps {
  children?: ReactNode | string
  icon?: string
  circle?: boolean
  size?: 'small' | 'middle' | 'large'
  background?: string | boolean
  customClass?: string
  onClick?: () => void
}

const Button: FC<IButtonProps> = ({ icon, circle, background , customClass, children, onClick }) => {
  let classes = 'flex hover:bg-white hover:text-black duration-medium'
  let iconClasses = 'leading-4 iconfont'
  if (icon) {
    iconClasses += ` icon-${icon}`
    classes += ' p-2'
  }
  if (customClass) {
    classes += customClass
  }
  if (circle) {
    classes += ' rounded-full'
  }
  if (background) {
    classes += ` bg-white text-black`
  }

  return (
    <button className={classes} onClick={onClick}>
      {icon && <i className={iconClasses} />}
      {children}
    </button>
  )
}

export default Button