import styles from './page.module.css'
import Header from './Header'
import Link from 'next/link'

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <div className={styles.description}>
        <p><Link href="/thesis">Thesis page</Link></p>
        <p><Link href="/default-cna">Default page</Link></p>
      </div>
    </main>
  )
}
