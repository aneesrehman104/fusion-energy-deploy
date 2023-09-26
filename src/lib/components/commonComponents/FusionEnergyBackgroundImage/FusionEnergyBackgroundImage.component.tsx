import React, { FC } from 'react';
import FusionEnergyButton from '../FusionEnergyButton';
import styles from './fusionEnergyBackgroundImage.module.css';
interface ImageCardProps {
    backgroundImage: any;
    title: string;
    button1Text: string;
    button1Link: string;
    button2Text: string;
    button2Link: string;
    key: string;
}
const FusionEnergyBackgroundImage: FC<ImageCardProps> = ({
    backgroundImage,
    title,
    button1Text,
    button1Link,
    button2Text,
    button2Link,
    key,
}) => {
    return (
        <>
            <article
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                }}
                className={styles.fusionEnergyBackgroundImage}
                key={key}
            >
                <section>
                    <h2 className={styles.fusionEnergyBackgroundMainTitle}>
                        {title}
                    </h2>
                    <p className={styles.fusionEnergyBackgroundDescription}>
                        Low-Cost Solar Panel Installation
                    </p>
                    <p className={styles.fusionEnergyBackgroundDescription}>
                        Without Sacrificing Efficiency.....
                    </p>
                </section>
                <section className={styles.fusionEnergyBackgroundImageButton}>
                    <FusionEnergyButton label={button1Text} />
                    <FusionEnergyButton
                        label={button2Text}
                        color="#171A20"
                        backgroundColor="#FFFFFF"
                    />
                </section>
            </article>
        </>
    );
};

export default FusionEnergyBackgroundImage;
