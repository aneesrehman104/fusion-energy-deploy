import React from 'react';
import dynamic from 'next/dynamic';

// Lazy-loaded components
const FusionEnergyButton = dynamic(
    () => import('@/lib/components/commonComponents/FusionEnergyButton'),
);

import styles from './whoWeAre.module.css';

interface PROPS {}
const WhoWeAre: React.FC<PROPS> = () => {
    return (
        <section className={styles.fusionEnergyWhoWeAreBackgroundImage}>
            <div className={styles.fusionEnergWhoWeAreSpaceAround}>
                <section className={styles.fusionEnergWhoWeAreInnerWidth}>
                    <p className={styles.fusionEnergyGreenDescription}>
                        WHO WE ARE
                    </p>
                    <h2 className={styles.fusionEnergyWhoWeAreMainTitle}>
                        YOUR ONE STOP SHOP FOR ENERGY EFFICIENT HOME
                        IMPROVEMENTS
                    </h2>
                    <p
                        className={styles.fusionEnergyBackgroundDescription}
                        style={{ width: '70%' }}
                    >
                        Fuzion Energy aims to be your one-stop-shop for
                        energy-efficient home improvements, whether that be
                        artificial turf, solar, or heating and air.
                    </p>
                </section>
                <section className={styles.fusionEnergyWhoWeAreCenter}>
                    <FusionEnergyButton label="Learn More" />
                </section>
            </div>
        </section>
    );
};

export default WhoWeAre;
