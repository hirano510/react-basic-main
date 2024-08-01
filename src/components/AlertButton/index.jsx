import styles from './index.module.css'

export const AlertButton = () => {
  const handleAlert = () => {
    alert('Alertが実行されました');
  }
  return <button onClick={handleAlert} className={styles.button}>Alert</button>
}
