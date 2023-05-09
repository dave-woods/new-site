import Link from "next/link";
import Header from "../Header";
import styles from "../page.module.css"

export default function ThesisPage() {
    return (
        <main className={styles.main}>
            <Header />
            <h1>Thesis page</h1>
            <p>My PhD research began in 2016, and finished in 2022 (dragged out a bit due to the COVID-19 pandemic). The work revolved around creating a computational framework for semantically representing the times and events that can appear in text for the purposes of temporal annotation tooling.</p>
            <p>More simply, can we make a computer understand what order things happened in a document.</p>

        </main>
    )
}