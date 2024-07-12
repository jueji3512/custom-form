import { FC, ReactNode, useState } from "react"
import { getFieldClasses } from "@/utils/getClasses.ts"


type InputProps = FC<{
  type?: 'text' | 'password'
  id?: string
  disabled?: boolean
  placeholder?: string
  prefix?: ReactNode | string
  suffix?: ReactNode | string
}>

const Input: InputProps = (props) => {
  const [isFocus, setIsFocus] = useState(false)
  function handleFocus() {
    setIsFocus(true)
  }
  function handleBlur() {
    setIsFocus(false)
  }
  
  const {
    type = 'text',
    id,
    disabled: componentDisabled,
    placeholder,
    prefix,
    suffix
  } = props
  
  const disabled = componentDisabled || false
  const { fieldClasses, wrapperClasses, borderClasses } = getFieldClasses({
    disabled,
    isFocus
  })
  
  return (
    <div className={wrapperClasses}>
      { prefix && <label htmlFor={id} className="pl-2">{prefix}</label> }
      <input
        id={id}
        type={type}
        placeholder={disabled ? '' : placeholder}
        className={fieldClasses}
        disabled={disabled}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      { suffix && <label htmlFor={id} className="pr-2">{suffix}</label> }
      <span className={borderClasses}></span>
    </div>
  )
}

export default Input