import styles from './page.module.css'
import Header from './Header'
// import { useContext } from 'react'
// import { ThemeContext } from './ThemeProvider'

export default function Home() {

  // const theme : string = useContext(ThemeContext)
  // console.log(theme)
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>Bleep bloop, dis the home page</p>
      </div>
    </main>
  )
}
