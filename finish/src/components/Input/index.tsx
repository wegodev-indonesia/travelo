import type { InputHTMLAttributes } from 'react'

import { useState } from 'react'
import clsx from 'clsx'

import { EyeIcon, EyeOffIcon } from '@heroicons/react/solid'
import styles from './Input.module.css'

type Props = {
  name: InputHTMLAttributes<HTMLInputElement>['name']
  type: InputHTMLAttributes<HTMLInputElement>['type']
  label: string
  placeholder: string
  className?: string
}

const Input = ({ name, type, label, placeholder, className }: Props) => {
  const [hidePassword, setHidePassword] = useState(false)
  const [inputType, setInputType] = useState(type)

  const handleEyeClick = () => {
    setHidePassword((prevState) => !prevState)

    if (type === 'password' && !hidePassword) {
      setInputType('text')
    } else {
      setInputType('password')
    }
  }

  return (
    <label htmlFor={name} className={clsx(styles.label, className)}>
      <div className="mb-3">{label}</div>

      <input
        className={styles.input}
        type={inputType}
        name={name}
        id={name}
        placeholder={placeholder}
      />

      {type === 'password' ? (
        <button type="button" className={styles.eye} onClick={handleEyeClick}>
          {hidePassword ? (
            <EyeOffIcon className="h-6 w-6 text-gray-100" />
          ) : (
            <EyeIcon className="h-6 w-6 text-gray-100" />
          )}
        </button>
      ) : null}
    </label>
  )
}

export default Input
