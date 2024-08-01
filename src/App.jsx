import reactLogo from './assets/react.svg'
import styles from './App.module.css'
import Button from './components/Button'
import { Profile } from './components/Profile'
import { Country } from './components/Country'
import { Card } from './components/Card'
import { TodoItem } from './components/TodoItem'
import { LanguageList } from './components/LanguageList'
import { AlertButton } from './components/AlertButton'
import { InputField } from './components/InputField'

export const App = () => {
  return (
    <div>
      <img src={reactLogo} className={styles['react-logo']} />
      <h1>Hello React!</h1>

      {/* 以下に練習問題の回答を記述してください */}

      <hr />

      <Button />
      <Button />
      <Button />

      <hr />

      <Profile />

      <hr />

      <Card>
        <Country />
      </Card>

      <hr />

      <ul>
        <TodoItem name='Reactの学習' isToday={true} isCompleted={true} />
        <TodoItem name='HTMLの復習' isToday={true} isCompleted={false} />
        <TodoItem name='React Hooksの予習' isToday={false} isCompleted={false} />
      </ul>

      <hr />

      <LanguageList />

      <hr />

      <AlertButton />

      <hr />

      <InputField />
    </div>
  )
}
