import styles from './index.module.css'

export const LanguageList = () => {
  const languages = [
    { id: 1, name: 'HTML', imgUrl: 'https://img.icons8.com/color/48/html-5--v1.png' },
    { id: 2, name: 'JavaScript', imgUrl: 'https://img.icons8.com/color/48/javascript--v1.png' },
    { id: 3, name: 'TypeScript', imgUrl: 'https://img.icons8.com/color/48/typescript.png' },
  ]

  return (
    <ul className={styles.wrapper}>
      {
        languages.map((languages) => (
          <li className={styles.item} key={languages.id}>
          <img src={languages.imgUrl} />
          <p>{languages.name}</p>
        </li>
        ))
      }
    </ul>
  )
}
