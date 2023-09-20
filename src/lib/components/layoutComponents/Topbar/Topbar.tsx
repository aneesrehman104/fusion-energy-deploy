import React from 'react';
import Link from 'next/link';
import styles from './Topbar.module.css';

export default function TopBar() {
    return (
        <nav className={styles.topbarWrapper}>
            <Link href="#" className={styles.topbarText}>
                GET A FREE SOLAR ESTIMATE HERE!
            </Link>
        </nav>
    );
}
