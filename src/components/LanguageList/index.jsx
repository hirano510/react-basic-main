import styles from './index.module.css'

export const LanguageList = () => {
  const languages = [
    { id: 1, name: 'HTML', imgUrl: 'https://img.icons8.com/color/48/html-5--v1.png' },
    { id: 2, name: 'JavaScript', imgUrl: 'https://img.icons8.com/color/48/javascript--v1.png' },
    { id: 3, name: 'TypeScript', imgUrl: 'https://img.icons8.com/color/48/typescript.png' },
  ]

  return (
    <ul className={styles.wrapper}>
      <li className={styles.item}>
        <img src={languages[0].imgUrl} />
        <p>{languages[0].name}</p>
      </li>
      <li className={styles.item}>
        <img src={languages[1].imgUrl} />
        <p>{languages[1].name}</p>
      </li>
      <li className={styles.item}>
        <img src={languages[2].imgUrl} />
        <p>{languages[2].name}</p>
      </li>
    </ul>
  )
}
