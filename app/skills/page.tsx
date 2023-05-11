import styles from "../page.module.css"

export default function SkillsPage() {
    return (
        <main className={styles.main}>
            <h1>Skills page</h1>
            {/* TODO: make a DB and store skills there? */}
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
            </ul>

        </main>
    )
}