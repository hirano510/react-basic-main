import styles from './index.module.css'
import clsx from 'clsx'

export const Button = ({ className, isActive }) => {
  return <button className={clsx(className, styles.button, { [styles.active]: isActive })}>Button</button>
}
