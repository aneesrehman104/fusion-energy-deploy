import React from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { IconsType, BannerProps } from '@/lib/ts/interface';
import { Images } from '@/assets/image';
import styles from './Banner.module.css';
import { Col, Row } from 'antd';

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
    showPartner = false,
    height = null,
}) => {
    return (
        <section
            className={styles.fusionEnergyBannerBackgroundImage}
            style={{
                backgroundImage: `url(${backgroundImage})`,
                height: height ?? '100vh',
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
                                            loading="eager"
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

                    {showPartner && (
                        <div className={styles.partnerWrapper}>
                            <div className={styles.partnerWrapperInner}>
                                <Image
                                    src={Images.PanasonicSolarLogo}
                                    alt="PanasonicSolarLogo"
                                    loading="eager"
                                />

                                <Image
                                    src={Images.SolarEdgeLogo}
                                    alt="SolarEdgeLogo"
                                    loading="eager"
                                />

                                <Image
                                    src={Images.YorkLogo}
                                    alt="YorkLogo"
                                    loading="eager"
                                />

                                <Image
                                    src={Images.EnphaseImage}
                                    alt="EnphaseImage"
                                    loading="eager"
                                />
                            </div>
                        </div>
                    )}
                </section>
            </div>
        </section>
    );
};

export default Banner;
