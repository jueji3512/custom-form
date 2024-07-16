import {ButtonHTMLAttributes, FC, ReactNode} from "react";

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode | string
  icon?: string
  circle?: boolean
  background?: string | boolean
  size?: 'small' | 'medium' | 'large'
  hover?: string | boolean
  customClass?: string
}

const Button: FC<IButtonProps> = ({ icon, circle, size = 'medium', background, hover = true , customClass, children, onClick }) => {
  let classes = 'flex duration-medium'
  let iconClasses = 'leading-4 iconfont'
  if (icon) {
    iconClasses += ` icon-${icon}`
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
  if (hover) {
    classes += ` hover:bg-white hover:text-black`
  }
  switch (size) {
    case 'small':
      classes += ' p-1'
      break
    case 'medium':
      classes += ' p-2'
      break
    case 'large':
      classes += ' p-3'
      break
  }

  return (
    <button className={classes} onClick={onClick}>
      {icon && <i className={iconClasses} />}
      {children}
    </button>
  )
}

export default Button