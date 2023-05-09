import styles from './page.module.css'
import Header from './Header'
import Link from 'next/link'

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <div className={styles.description}>
        <p>Bleep bloop, dis the home page</p>
      </div>
    </main>
  )
}
