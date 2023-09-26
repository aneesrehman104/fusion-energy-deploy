import React from 'react';
import styles from './story.module.css';
const Story: React.FC = () => {
    return (
        <section className={styles.storyContainer}>
            <div className={styles.storyHeadingWrapper}>
                <h2 className={styles.storyHeading}>Our Story</h2>
                <p className={styles.storyDescription}>
                    Fuzion Energy was created to be your one stop shop for
                    artificial turf, solar solutions, home generators, back-up
                    home batteries, HVAC solutions, and concrete work.
                </p>
            </div>
        </section>
    );
};

export default Story;
