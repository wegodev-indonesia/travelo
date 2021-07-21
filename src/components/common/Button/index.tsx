import { ReactNode } from "react";

import styles from './Button.module.css'

type Props = {
  children: ReactNode | string
}

const Button = ({ children }: Props) => {
  return (
    <button className={styles.button}>
      {children}
    </button>
  );
};

export default Button;