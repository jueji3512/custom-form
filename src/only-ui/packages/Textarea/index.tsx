import { ChangeEvent, FC, ReactNode, useState } from "react"
import { getFieldClasses } from "../../utils/getClasses.ts"

export interface ITextareaProps {
  disabled?: boolean
  placeholder?: string
  rows?: number
  prefix?: ReactNode | string
  suffix?: ReactNode | string
}
const Textarea: FC<ITextareaProps> = (props) => {
  const {
    id,
    disabled: componentDisabled,
    placeholder,
    rows = 3,
    autosize = true,
    lineHeight = 24,
    prefix,
    suffix
  } = props
  
  const [isFocus, setIsFocus] = useState(false)
  function handleFocus() {
    setIsFocus(true)
  }
  function handleBlur() {
    setIsFocus(false)
  }
  function handleInput(e: ChangeEvent<HTMLTextAreaElement>) {
    if (autosize) {
      e.target.style.height = rows * lineHeight + 'px' + '1rem'
      e.target.style.height = `${e.target.scrollHeight}px + 1rem`
      // TODO: 此处应把rem和px搞到一起
    }
  }
  
  const disabled = componentDisabled || false
  const { fieldClasses, wrapperClasses, borderClasses } = getFieldClasses({
    baseFieldClasses: `leading-${lineHeight / 4}`,
    disabled,
    isFocus
  })
  
  return (
    <div className={wrapperClasses}>
      { prefix && <label htmlFor={id} className="pl-2">{prefix}</label> }
      <textarea
        id={id}
        placeholder={disabled ? '' : placeholder}
        className={fieldClasses}
        disabled={disabled}
        rows={rows}
        onInput={handleInput}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      { suffix && <label htmlFor={id} className="pr-2">{suffix}</label> }
      <span className={borderClasses}></span>
    </div>
  )
}

export default Textarea