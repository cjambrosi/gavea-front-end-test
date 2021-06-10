import { ChangeEvent, useEffect, useState } from 'react'
import { InputBlock, InputElement, Icon } from './styles'

interface InputProps {
  type: string
  name: string
  value: string
  placeholder: string
  leftIcon: string
  rigthIcon?: boolean
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  onBlur?: (event: ChangeEvent<HTMLInputElement>) => void
}

export function Input({
  type,
  value,
  name,
  leftIcon,
  rigthIcon,
  placeholder,
  onChange,
  onBlur
}: InputProps) {
  const [passwordShown, setPasswordShown] = useState(type)
  const [openEye, setOpenEye] = useState('icon-eye-open')

  useEffect(() => {
    if (passwordShown === 'password') {
      setOpenEye('icon-eye-open')
    } else {
      setOpenEye('icon-eye-closed')
    }
  }, [passwordShown])

  const handleToggleInputPasswordType = () => {
    setPasswordShown(passwordShown === 'text' ? 'password' : 'text')
  }

  return (
    <InputBlock>
      <Icon className={`icon ${leftIcon}`}></Icon>
      <InputElement
        type={passwordShown}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        placeholder={placeholder}
      />
      {rigthIcon && (
        <Icon
          className={`icon ${openEye}`}
          onClick={handleToggleInputPasswordType}
        ></Icon>
      )}
    </InputBlock>
  )
}
