import {
  ChangeEvent,
  CompositionEvent,
  FC,
  ReactNode,
  useMemo,
  useRef,
  useState
} from "react"
import {getFieldClasses} from "@/utils/getClasses.ts"
import {getUuid} from "@/utils/getUuid.ts";
import useValue from "@/only-ui/hooks/useValue.ts";

export interface IInputProps {
  value?: string
  type?: 'text' | 'password'
  defaultValue?: string
  disabled?: boolean
  placeholder?: string
  showCount?: boolean
  error?: boolean
  errorMsg?: string
  prefix?: ReactNode | string
  suffix?: ReactNode | string
  onChange?: (value: string, context?: { e?: CompositionEvent<HTMLInputElement> }) => void
  onCompositionStart?: (value: string, context: { e: CompositionEvent<HTMLInputElement> }) => void
  onCompositionEnd?: (value: string, context: { e: CompositionEvent<HTMLInputElement> }) => void
}

const Input: FC<IInputProps> = (props) => {
  const idRef = useRef(getUuid())
  const [composingValue, setComposingValue] = useState<string>('')
  const composingRef = useRef(false)

  function handleChange(e: ChangeEvent<HTMLInputElement> | CompositionEvent<HTMLInputElement>) {
    console.log(111)
    const { value: currentValue } = e.currentTarget
    if (composingRef.current) {
      setComposingValue(currentValue)
    } else {
      setComposingValue(currentValue)
      onChange?.(currentValue)
    }
  }

  function handleComposingStart(e: CompositionEvent<HTMLInputElement>) {
    composingRef.current = true
    const {
      currentTarget: {
        value
      }
    } = e
    onCompositionStart?.(value, {e})
  }

  function handleComposingEnd(e: CompositionEvent<HTMLInputElement>) {
    const {
      currentTarget: {
        value
      }
    } = e
    if (composingRef.current) {
      composingRef.current = false
      handleChange(e)
    }
    onCompositionEnd?.(value, {e})
  }

  const {
    type = 'text',
    disabled: componentDisabled,
    placeholder,
    showCount,
    error,
    errorMsg,
    prefix,
    suffix,
    onChange: propsOnChange,
    onCompositionStart,
    onCompositionEnd
  } = props

  const [inputValue, onChange] = useValue(props, 'value', propsOnChange)

  const disabled = componentDisabled || false
  const {fieldClasses, wrapperClasses, borderClasses} = useMemo(() => getFieldClasses({
    error,
    disabled
  }), [error, disabled])

  const value = composingRef.current ? composingValue : inputValue

  return(
    <>
      <div className={wrapperClasses}>
        {prefix && <label
          htmlFor={idRef.current}
          className="pl-2"
        >{prefix}</label>}
        <input
          value={value}
          id={idRef.current}
          type={type}
          placeholder={disabled ? '' : placeholder}
          className={fieldClasses}
          disabled={disabled}
          onChange={handleChange}
          onCompositionStart={handleComposingStart}
          onCompositionEnd={handleComposingEnd}
        />
        {showCount ? <span className="text-com-text-placeholder [&:not(last-child)]:mr-1">{(value as string).length}</span> : null}
        {suffix && <label
          htmlFor={idRef.current}
          className="pr-2"
        >{suffix}</label>}
        <span className={borderClasses}></span>
      </div>
      {error && errorMsg && <p className="mt-0.5 text-red-600 text-xs">{errorMsg}</p>}
    </>
  )
}

export default Input