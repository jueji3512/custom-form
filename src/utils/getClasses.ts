
const initialWrapperClasses = " relative w-full flex justify-between items-center overflow-hidden" +
  " before:border-b-2 before:absolute before:w-full before:bottom-0 before:border-com-border-primary"
const initialFieldClasses = ' w-full inline-block px-2 py-2 bg-transparent focus:outline-0 placeholder:text-com-text-placeholder'
const initialBorderClasses = ' absolute bottom-0 left-0 h-[2px] bg-com-border-focus duration-short'

const disabledWrapperClasses = ' bg-com-background-disabled'
const disabledFieldClasses = ' text-com-text-disabled cursor-not-allowed'

const focusedBorderClasses = ' w-full'
const noFocusedBorderClasses = ' w-0'

interface IGetClassesProps {
  baseWrapperClasses?: string,
  baseFieldClasses?: string,
  baseBorderClasses?: string,
  disabled?: boolean,
  isFocus?: boolean
}

export function getFieldClasses(props: IGetClassesProps) {
  const {
    baseWrapperClasses = '',
    baseFieldClasses = '',
    baseBorderClasses = '',
    disabled,
    isFocus
  } = props
  
  let fieldClasses = baseFieldClasses + initialFieldClasses
  let wrapperClasses = baseWrapperClasses + initialWrapperClasses
  let borderClasses = baseBorderClasses + initialBorderClasses
  
  if (disabled) {
    fieldClasses += disabledFieldClasses
    wrapperClasses += disabledWrapperClasses
  }
  if (isFocus) {
    borderClasses += focusedBorderClasses
  } else {
    borderClasses += noFocusedBorderClasses
  }
  
  return {
    fieldClasses,
    wrapperClasses,
    borderClasses
  }
}