import React from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { IconsType, BannerProps } from '@/lib/ts/interface';
import styles from './Banner.module.css';

const Navbar = dynamic(() =>
    import('@/lib/components/layoutComponents').then((m) => m.Navbar),
);
const FusionEnergyButton = dynamic(() =>
    import('@/lib/components/commonComponents').then(
        (m) => m.FusionEnergyButton,
    ),
);

const Banner: React.FC<BannerProps> = ({
    iconsArray,
    backgroundImage,
    title,
    description,
    showButton = false,
    labelBtn,
    onClick,
}) => {
    return (
        <section
            className={styles.fusionEnergyBannerBackgroundImage}
            style={{
                backgroundImage: `url(${backgroundImage})`,
            }}
        >
            <Navbar />
            <div className={styles.fusionEnergBannerSpaceBetween}>
                <section>
                    <h2 className={styles.fusionEnergyBannerTitle}>{title}</h2>
                    <p className={styles.fusionEnergyBannerDescription}>
                        {description}
                    </p>
                </section>

                <section className={styles.fusionEnergyBannerCenter}>
                    <div className={styles.iconStyle}>
                        {Array.isArray(iconsArray) &&
                            iconsArray.map((item: IconsType) => {
                                return (
                                    <div key={item.icon}>
                                        <Image
                                            src={item.icon}
                                            alt={item.icon}
                                            height={item.iconHeight}
                                            width={item.iconWidth}
                                        />
                                        <div
                                            className={
                                                styles.fusionEnergyWhiteSmallDescription
                                            }
                                        >
                                            {item.title}
                                        </div>
                                    </div>
                                );
                            })}
                    </div>
                    {showButton && (
                        <FusionEnergyButton
                            label={labelBtn}
                            onClick={onClick}
                        />
                    )}
                </section>
            </div>
        </section>
    );
};

export default Banner;
