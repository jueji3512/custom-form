
const initialWrapperClasses = " relative w-full flex justify-between items-center overflow-hidden"
const initialWrapperBorderClasses = " before:border-b-2 before:absolute before:w-full before:bottom-0 before:border-com-border-primary"
const initialFieldClasses = ' w-full inline-block px-2 py-2 bg-transparent focus:outline-0 placeholder:text-com-text-placeholder peer/field'
const initialBorderClasses = ' w-0 absolute bottom-0 left-0 h-[2px] duration-short peer-focus/field:w-full peer-focus/field:bg-com-border-focus'

const disabledWrapperClasses = ' bg-com-bg-disabled'
const disabledFieldClasses = ' text-com-text-disabled cursor-not-allowed'

const errorFieldClasses = ' w-full inline-block px-2 py-2 bg-transparent focus:outline-0 placeholder:text-com-text-placeholder peer/error-field'
const errorWrapperBorderClasses = ' before:border-b-2 before:absolute before:w-full before:bottom-0 before:border-com-border-error'
const errorBorderClasses = ' w-0 peer-focus/error-field:w-full peer-focus/error-field:bg-com-border-error-focus'

interface IGetClassesProps {
  baseWrapperClasses?: string,
  baseFieldClasses?: string,
  baseBorderClasses?: string,
  disabled?: boolean,
  error?: boolean
}

export function getFieldClasses(props: IGetClassesProps) {
  const {
    baseWrapperClasses = '',
    baseFieldClasses = '',
    baseBorderClasses = '',
    disabled,
    error
  } = props
  
  let fieldClasses = baseFieldClasses + initialFieldClasses
  let wrapperClasses = baseWrapperClasses + initialWrapperClasses + initialWrapperBorderClasses
  let borderClasses = baseBorderClasses + initialBorderClasses
  
  if (disabled) {
    fieldClasses += disabledFieldClasses
    wrapperClasses += disabledWrapperClasses
  }
  if (error) {
    fieldClasses = baseFieldClasses + errorFieldClasses
    borderClasses = initialBorderClasses + errorBorderClasses
    wrapperClasses = baseWrapperClasses + initialWrapperClasses + errorWrapperBorderClasses
  }
  
  return {
    fieldClasses,
    wrapperClasses,
    borderClasses
  }
}