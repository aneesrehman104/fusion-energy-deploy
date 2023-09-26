import React from 'react';
import dynamic from 'next/dynamic';
import styles from './fusionEnergyFindOut.module.css';

// Lazy-loaded components
const FusionEnergyButton = dynamic(() =>
    import('@/lib/components/commonComponents').then(
        (m) => m.FusionEnergyButton,
    ),
);
const Navbar = dynamic(() =>
    import('@/lib/components/layoutComponents').then((m) => m.Navbar),
);

interface PROPS {}

const FinedOut: React.FC<PROPS> = () => {
    return (
        <section className={styles.fusionEnergyFindOutBackgroundImage}>
            <Navbar />
            <div className={styles.fusionEnergSpaceBetween}>
                <section>
                    <h2 className={styles.fusionEnergyWhiteTitle}>
                        Efficiency Is The Future
                    </h2>
                    <p className={styles.fusionEnergyWhiteDescription}>
                        Contact us today to take advantage
                    </p>
                </section>
                <section className={styles.fusionEnergyFindOutCenter}>
                    <FusionEnergyButton label="Find Out How" />
                </section>
            </div>
        </section>
    );
};

export default FinedOut;
