'use client';

import Link from 'next/link'
import styles from './NavBar.module.css'
import ThemeToggle from './ThemeToggle'
import { usePathname } from 'next/navigation'

export default function NavBar({navLinks}: {navLinks: {slug: string, text: string}[]}) {
    const pathname = usePathname();
    return (
        <nav className={[styles.navbar].join(' ')}>
            <div>Dave</div>
            {navLinks.map(nl => {
                return (
                    <div key={nl.text} className={pathname === `${nl.slug}` ? `${styles.active}` : ''}>
                        <Link href={nl.slug}>{nl.text}</Link>
                    </div>
                )
            })}
            <div><ThemeToggle /></div>
        </nav>
    )
}