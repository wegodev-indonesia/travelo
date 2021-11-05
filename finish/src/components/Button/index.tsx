import { ButtonHTMLAttributes, ReactNode } from 'react'
import cn from 'classnames'

import styles from './Button.module.css'

type Props = {
  children: ReactNode | string
  className?: string
  fullWidth?: boolean
  outlined?: boolean
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type']
}

const Button = ({
  children,
  className = '',
  fullWidth,
  outlined,
  type,
}: Props) => {
  return (
    <button
      type={type}
      className={cn(styles.button, className, {
        [styles.fullWidth]: fullWidth,
        [styles.outlined]: outlined,
      })}
    >
      {children}
    </button>
  )
}

export default Button
