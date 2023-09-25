import React from 'react';
import Image from 'next/image';
import { IconsType, BannerProps } from '@/lib/ts/interface';
import Navbar from '../Navbar';
import { FusionEnergyButton } from '../../commonComponents';
import styles from './Banner.module.css';

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
