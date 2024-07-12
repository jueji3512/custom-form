import Input from './index.tsx'
import { FC } from "react"

const PasswordSuffix: FC = () => {
  return (
    <div>122</div>
  )
}

const Password: FC = () => {
  return (
    <Input
      id="password"
      type="password"
      placeholder="请输入密码"
      suffix={<PasswordSuffix />}
    />
  )
}

export default Password