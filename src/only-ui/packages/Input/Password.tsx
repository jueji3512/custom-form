import Input, {IInputProps} from './index.tsx'
import {FC, useState, MouseEvent} from "react"
import Icon from "@/only-ui/packages/Icon";

export interface IPasswordProps extends IInputProps {
}

const Password: FC<IPasswordProps> = ({ placeholder, ...props }) => {
  const [showPassword, setShowPassword] = useState(true)
  function handlePasswordVisible(e: MouseEvent) {
    e.preventDefault()
    setShowPassword(preState => !preState)
  }

  const PasswordSuffix: FC = () => {
    return (
      <Icon name={showPassword ? 'eye' : 'eye-close'} onClick={handlePasswordVisible} />
    )
  }

  return (
    <Input
      type={showPassword ? 'password' : 'text'}
      placeholder={placeholder ? placeholder : '请输入密码'}
      suffix={<PasswordSuffix />}
      { ...props }
    />
  )
}

export default Password