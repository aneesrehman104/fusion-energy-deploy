'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { Grid } from 'antd';
import { useRouter } from 'next/navigation';
import { FusionEnergyButton } from '@/lib/components/commonComponents';
import { footerSections } from '@/utils/mock';
import { Images } from '@/assets/image';
import styles from './Footer.module.css';
interface PROPS {}
const { useBreakpoint } = Grid;

const Footer: React.FC<PROPS> = () => {
    const router = useRouter();
    const screens = useBreakpoint();

    const [selectedSection, setSelectedSection] = useState<number | null>(null);

    const handleSectionClick = (index: number) => {
        setSelectedSection(index === selectedSection ? null : index);
    };
    return (
        <div>
            <section className={styles.fusionEnergyFooterCenterStyle}>
                <div className={styles.fusionEnergyFooterGreenWidth}>
                    <div
                        className={
                            styles.fusionEnergyFooterGreenBackgroundImage
                        }
                    >
                        <div className={styles.fusionEnergyFooterCardStyle}>
                            <div
                                className={styles.fusionEnergyFooterGreenTitle}
                            >
                                Fastest & secure way to get clean, safe and
                                renewable energy
                            </div>
                            <FusionEnergyButton label="Get Free Estimates" />
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.fusionEnergyFooterBackgroundImage}>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div
                        className={`${styles.fusionEnergyFooterGreenWidth} ${styles.fusionEnergyFooterPaddingTop}`}
                    >
                        <div
                            className={styles.fusionEnergyFooterContainerStyle}
                        >
                            <Image
                                src={Images.AppLogo}
                                alt="fusion-energy-logo"
                                loading="eager"
                            />

                            {footerSections.map((section, index) => (
                                <div
                                    key={section.id}
                                    className={
                                        styles.fusionEnergyFooterInnerContainerStyle
                                    }
                                >
                                    <div
                                        className={
                                            styles.fusionEnergyFooterTitles
                                        }
                                        onClick={() =>
                                            handleSectionClick(index)
                                        }
                                    >
                                        {section.title}
                                    </div>

                                    {section.id !== 3 ? (
                                        !screens.lg ? (
                                            selectedSection === index &&
                                            section.items.map(
                                                (item, itemIndex) => (
                                                    <div
                                                        key={itemIndex}
                                                        className={
                                                            styles.fusionEnergyFooterText
                                                        }
                                                        onClick={() =>
                                                            router.push(
                                                                item?.url ||
                                                                    '/',
                                                            )
                                                        }
                                                    >
                                                        {item.text}
                                                    </div>
                                                ),
                                            )
                                        ) : (
                                            <>
                                                <div
                                                    className={
                                                        styles.fusionEnergyFooterText
                                                    }
                                                >
                                                    Fuzion Energy 4003
                                                    Terracotta Ct Bakersfield,
                                                    CA, 93314
                                                </div>
                                                <div
                                                    className={
                                                        styles.fusionEnergyFooterText
                                                    }
                                                >
                                                    Phone:{' '}
                                                    <a href="tel:661-243-9934">
                                                        <u>661-243-9934</u>
                                                    </a>
                                                </div>
                                                <div
                                                    className={
                                                        styles.fusionEnergyFooterText
                                                    }
                                                >
                                                    CSLB# 1025073, 1034083
                                                </div>
                                                <div
                                                    className={
                                                        styles.fusionEnergyFooterText
                                                    }
                                                >
                                                    <div
                                                        style={{
                                                            display: 'flex',
                                                        }}
                                                    >
                                                        <Image
                                                            src={'./fb_svg.svg'}
                                                            alt="fb_svg"
                                                            loading="eager"
                                                            width={32}
                                                            height={32}
                                                            style={{
                                                                marginRight: 10,
                                                            }}
                                                        />
                                                        <Image
                                                            src={
                                                                './twitter_svg.svg'
                                                            }
                                                            alt="twitter_svg"
                                                            loading="eager"
                                                            width={32}
                                                            height={32}
                                                            style={{
                                                                marginRight: 10,
                                                            }}
                                                        />
                                                        <Image
                                                            src={
                                                                './insta_svg.svg'
                                                            }
                                                            alt="insta_svg"
                                                            loading="eager"
                                                            width={32}
                                                            height={32}
                                                            style={{
                                                                marginRight: 10,
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    ) : section.id !== 3 ? (
                                        section.items.map((item, itemIndex) => (
                                            <div
                                                key={itemIndex}
                                                className={
                                                    styles.fusionEnergyFooterText
                                                }
                                                onClick={() =>
                                                    router.push(
                                                        item?.url || '/',
                                                    )
                                                }
                                            >
                                                {item.text}
                                            </div>
                                        ))
                                    ) : (
                                        <>
                                            <div
                                                className={
                                                    styles.fusionEnergyFooterText
                                                }
                                            >
                                                Fuzion Energy 4003 Terracotta Ct
                                                Bakersfield, CA, 93314
                                            </div>
                                            <div
                                                className={
                                                    styles.fusionEnergyFooterText
                                                }
                                            >
                                                Phone:{' '}
                                                <a href="tel:661-243-9934">
                                                    <u>661-243-9934</u>
                                                </a>
                                            </div>
                                            <div
                                                className={
                                                    styles.fusionEnergyFooterText
                                                }
                                            >
                                                CSLB# 1025073, 1034083
                                            </div>
                                            <div
                                                className={
                                                    styles.fusionEnergyFooterText
                                                }
                                            >
                                                <div
                                                    style={{ display: 'flex' }}
                                                >
                                                    <Image
                                                        src={'./fb_svg.svg'}
                                                        alt="fb_svg"
                                                        loading="eager"
                                                        width={32}
                                                        height={32}
                                                        style={{
                                                            marginRight: 10,
                                                        }}
                                                    />
                                                    <Image
                                                        src={
                                                            './twitter_svg.svg'
                                                        }
                                                        alt="twitter_svg"
                                                        loading="eager"
                                                        width={32}
                                                        height={32}
                                                        style={{
                                                            marginRight: 10,
                                                        }}
                                                    />
                                                    <Image
                                                        src={'./insta_svg.svg'}
                                                        alt="insta_svg"
                                                        loading="eager"
                                                        width={32}
                                                        height={32}
                                                        style={{
                                                            marginRight: 10,
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        </>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <section>
                    <div className={styles.fusionEnergyPoweredClass}>
                        © 2023 Fuzion Energy | CSLB# 1025073, 1034083 | Powered
                        by Barton Marketing
                    </div>
                </section>
            </section>
        </div>
    );
};

export default Footer;
