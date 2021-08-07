import { ReactNode } from "react"
import cn from "classnames"

import styles from './Button.module.css'

type Props = {
  children: ReactNode | string
  className?: string
  fullWidth?: boolean
  outlined?: boolean
}

const Button = ({ children, className = '', fullWidth, outlined }: Props) => {
  return (
    <button className={cn(styles.button, className, {
      [styles.fullWidth]: fullWidth,
      [styles.outlined]: outlined
    })}>
      {children}
    </button>
  );
};

export default Button;