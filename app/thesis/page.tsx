import Link from "next/link";
import Header from "../Header";
import styles from "../page.module.css"

export default function ThesisPage() {
    return (
        <main className={styles.main}>
            <Header />
            <h1>Thesis page</h1>
            <Link href="/">Home</Link>

        </main>
    )
}