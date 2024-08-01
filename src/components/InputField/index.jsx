import { useState } from 'react'
import styles from './index.module.css'

export const InputField = () => {
  const [value, setValue] =useState('')
  const handleForm = (e) => {
    setValue(e.target.value)
  }

  return (
    <>
      <input onChange={handleForm} className={styles.input} placeholder='任意の文字を入力' />
      <p>入力文字：{value}</p>
    </>
  )
}
