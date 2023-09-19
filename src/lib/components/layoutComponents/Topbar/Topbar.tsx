import React from 'react';
import styles from './Topbar.module.css';
import Link from 'next/link';

export default function TopBar() {
    return (
        <nav className={styles.topbarWrapper}>
            <Link href="#" className={styles.topbarText}>
                GET A FREE SOLAR ESTIMATE HERE!
            </Link>
        </nav>
    );
}
