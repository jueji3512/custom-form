import {noop, upperFirst} from "lodash";
import {useState} from "react";

interface IChangeHandler<T, R extends any[]> {
  (value: T, ...rest: R): void
}
type useValueType = <T extends object, R extends keyof T, S extends any[]>(props: T, key: R, onChange: IChangeHandler<Required<T>[R], S> | undefined) => [T[R], IChangeHandler<Required<T>[R], S>]

const useValue: useValueType = (props, key, onChange) => {
  const isControlled = Reflect.has(props, 'value')
  const propsValue = props[key]
  const defaultValue = props[`default${upperFirst(key as string)}` as typeof key]
  const [value, setValue] = useState(defaultValue)
  if (isControlled) {
    return [propsValue, onChange || noop]
  }
  return [
    value,
    (val, ...rest) => {
      setValue(val)
      onChange?.(val, ...rest)
    }
  ]
}
export default useValue